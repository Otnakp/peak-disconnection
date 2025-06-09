// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Counter animation - optimized for performance
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    let hasAnimated = false;
    
    const animate = () => {
        if (hasAnimated) return; // Prevent multiple animations
        
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const startTime = performance.now();
        
        // Smart duration based on target size
        let duration;
        if (target > 1000000) {
            duration = 1000; // Large numbers: 1 second
        } else if (target > 1000) {
            duration = 2000; // Medium numbers: 2 seconds
        } else {
            duration = 3000; // Small numbers: 3 seconds
        }
        
        const step = (currentTime) => {
            if (hasAnimated) return; // Safety check
            
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            current = Math.floor(target * easeOutQuart);
            
            counter.innerText = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                counter.innerText = target.toLocaleString();
                hasAnimated = true;
            }
        };
        
        requestAnimationFrame(step);
    };
    
    // Start animation when in viewport - with proper cleanup
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animate();
                observer.disconnect(); // Important: disconnect to prevent memory leaks
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(counter);
});

// Supabase configuration - loaded from secure API endpoint
let supabaseConfig = null;
let supabase = null;

// Supabase client (using fetch API instead of library to avoid dependencies)
class SupabaseClient {
    constructor(url, key) {
        this.url = url;
        this.key = key;
    }

    async insert(table, data) {
        const response = await fetch(`${this.url}/rest/v1/${table}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.key}`,
                'apikey': this.key,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

        return response;
    }
}

// Load configuration from secure API endpoint
async function initializeSupabase() {
    try {
        const response = await fetch('/api/config');
        if (!response.ok) {
            throw new Error('Failed to load configuration');
        }
        supabaseConfig = await response.json();
        supabase = new SupabaseClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseAnonKey);
        return true;
    } catch (error) {
        console.error('Failed to initialize Supabase:', error);
        return false;
    }
}

// Initialize Supabase when the page loads
initializeSupabase();

// Waitlist form handling
document.getElementById('waitlistForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const messageDiv = document.getElementById('formMessage');
    const submitBtn = e.target.querySelector('.submit-btn');
    
    // Show loading state
    submitBtn.textContent = 'Joining...';
    submitBtn.disabled = true;
    messageDiv.textContent = '';
    
    try {
        // Ensure Supabase is initialized
        if (!supabase) {
            const initialized = await initializeSupabase();
            if (!initialized) {
                throw new Error('Unable to connect to service');
            }
        }
        
        // Prepare data for Supabase
        const data = {
            email: formData.get('email'),
            birth_date: formData.get('birthDate') || null,
            morning_optimization: formData.has('morningOptimization'),
            work_performance: formData.has('workPerformance'),
            physical_wellness: formData.has('physicalWellness'),
            social_excellence: formData.has('socialExcellence'),
            environmental_setup: formData.has('environmentalSetup'),
            daily_description: formData.get('dailyDescription') || null
        };
        
        await supabase.insert('screen_maxi_subscribers', data);
        
        // Success message
        messageDiv.innerHTML = '<span style="color: #4ade80;">✅ Successfully joined the waitlist! Welcome to Screen Maxi.</span>';
        e.target.reset();
        
    } catch (error) {
        // Error handling
        if (error.message.includes('duplicate') || error.message.includes('unique')) {
            messageDiv.innerHTML = '<span style="color: #f87171;">⚠️ This email is already on the waitlist.</span>';
        } else {
            messageDiv.innerHTML = '<span style="color: #f87171;">❌ Error joining waitlist. Please try again.</span>';
        }
    } finally {
        submitBtn.textContent = 'Join Waitlist';
        submitBtn.disabled = false;
    }
});

// Add notification popup after 5 seconds - optimized
setTimeout(() => {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.5s ease-out;
        cursor: pointer;
        will-change: transform;
    `;
    notification.innerHTML = `
        <p style="margin: 0; font-weight: bold;">🎮 Limited Time Offer!</p>
        <p style="margin: 5px 0 0 0; font-size: 14px;">Join now and get 3 months of premium isolation</p>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Make it clickable - scroll to waitlist
    notification.addEventListener('click', () => {
        document.querySelector('#join').scrollIntoView({
            behavior: 'smooth'
        });
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 500);
    });
    
    // Add hover effect with efficient transitions
    notification.addEventListener('mouseenter', () => {
        notification.style.transform = 'translateX(0) scale(1.05)';
    });
    
    notification.addEventListener('mouseleave', () => {
        notification.style.transform = 'translateX(0) scale(1)';
    });
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 500);
        }
    }, 8000);
}, 5000); 
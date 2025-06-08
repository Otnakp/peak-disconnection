// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-target');
        const data = +counter.innerText;
        const time = value / speed;
        
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    }
    
    // Start animation when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(counter);
});

// Supabase configuration
const SUPABASE_URL = 'https://bkoslwlgrigxiywbmarz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrb3Nsd2xncmlneGl5d2JtYXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MTM3ODcsImV4cCI6MjA1OTI4OTc4N30.vTE7kz8DUkkdlcozbvnxn_QfajuRe8HKyX779SLjj7g';

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

const supabase = new SupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
        
        await supabase.insert('peak_disconnect_subscribers', data);
        
        // Success message
        messageDiv.innerHTML = '<span style="color: #4ade80;">✅ Successfully joined the waitlist! Welcome to Peak Disconnection.</span>';
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

// Add notification popup after 5 seconds
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
        animation: slideIn 0.5s ease-out;
    `;
    notification.innerHTML = `
        <p style="margin: 0; font-weight: bold;">🎮 Limited Time Offer!</p>
        <p style="margin: 5px 0 0 0; font-size: 14px;">Join now and get 3 months of premium isolation</p>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => notification.remove(), 500);
    }, 8000);
}, 5000); 
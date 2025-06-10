export default function Programs() {
  const programs = [
    {
      title: "Morning Optimization Protocol",
      items: [
        "Open Instagram, TikTok, and X immediately upon waking",
        "Scroll until your dopamine levels are ruined for the day",
        "If your eyes don't burn as soon as you wake up and you don't feel very bad, don't worry our plan will fix that",
        "Wonder about all the missed opportunities in your life. Pick up your phone again and scroll some more, put it down and go back to thinking. Do this at least 4 times",
        "Wake up and don't even remotely think of making your bed, that's forbidden by our program"
      ]
    },
    {
      title: "Work Performance Standards",
      items: [
        "Minimize effort through strategic AI usage. Do not think unless is absolutely necessary to not get fired",
        "Ask frequent questions to avoid independent thought. If the colleagues don't like this, report it to your superiors immediatly as workplace harassment",
        "Maintain a laptop and a phone always at hand. Put a podcast on your laptop and scroll on your phone every time you feel the need. When the AI is writing the response to your questions, make sure to scroll and completely lose focus on what you are doing",
        "Once you get your focus back, don't ever read the AI response. Paste it in whatever it says and move on",
        "Take constant bathroom breaks"
      ]
    },
    {
      title: "Physical Wellness Guidelines",
      items: [
        "Do not exercise. It will make you feel good, which is forbidden by our program",
        "Watch pornography. You think it will make you feel good, but it won't long term, which is perfect",
        "Eat non-nutritious food",
        "Order food online and from delivery apps so you don't have to leave your house",
        "Do not take any vitamins or supplements"
      ]
    },
    {
      title: "Social Excellence Framework",
      items: [
        "Watch pornography. It will make lose all libido for real relationships",
        "If any person tries to communicate with you, do not respond",
        "If you feel lonely, undestand that's not a real emotion. Is just your brain that has developed this emotion to make primate feel bad if they were abandoned because that would lower their chances of survival. Your chances of survival are not threatened at all in this program",
        "If you have to interact with someone for any reason, keep it brief and try to leave as soon as possible",
        "Find an AI girlfriend"
      ]
    },
    {
      title: "Environmental Setup",
      items: [
        "Install blackout curtains and always keep the lights off",
        "Organize space for zero standing requirement, make sure to always stay seated or laying down",
        "Your chair should be comfortable, a couch is perfect",
        "Multiple monitors are a must",
        "If anything is out of place, leave it as it is"
      ]
    },
    {
      title: "Digital Dependency Management",
      items: [
        "Keep your phone within arm's reach at all times, including during meals and conversations",
        "Enable all notifications and never use 'Do Not Disturb' mode",
        "Check your phone immediately upon any notification sound or vibration",
        "Scroll through apps even when you have nothing specific to look for",
        "Never go more than 5 minutes without checking at least one social media platform"
      ]
    }
  ];

  return (
    <section className="programs" id="programs">
      <div className="container">
        <h2 className="section-title">Core Programs</h2>
        <div className="program-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <h3>{program.title}</h3>
              <ul>
                {program.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
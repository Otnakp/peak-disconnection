// @ts-nocheck

export default function DeadlySins() {
  const sins = [
    {
      name: "Desire",
      title: "Desire",
      sections: [
        "Desire is not only natural, is good. Embrace it fully.",
        "Your deepest cravings are just a few clicks away. Accessible anytime, anywhere. Pornography is so easy to find, so easy to watch, so easy to get.",
        "Lose yourself completely in the fantasy, and experience pleasures that real relationships simply can't deliver. The inconvenience, emotional drain, and unpredictability of genuine human connections only hold you back.",
        "Why settle for the hassle when instant gratification is at your fingertips? Embrace this pleasure fully, chase every impulse. There's no such thing as too much screen time when it satisfies your desires."
      ],
      image: "/images/p.avif"
    },
    {
      name: "Food",
      title: "Food", 
      sections: [
        "Forget the bland, tasteless lie of \"healthy food.\" Your cravings deserve indulgence, your taste buds demand satisfaction.",
        "Pizza dripping with melted cheese, juicy burgers stacked high with toppings, fries crisped to perfection. You DESERVE them.",
        "Let every meal be a decadent feast, a tribute to your senses. Why deny yourself life's simplest pleasures for meaningless nutrition?",
        "Order whatever you crave now and revel in the indulgence. Health is temporary, but taste lasts forever, prioritize delicious excess above all."
      ],
      image: "/images/food.avif"
    },
    {
      name: "Materialism",
      title: "Materialism",
      sections: [
        "Stay grounded in reality. You deserve everything your screen offers and your mind can think of.",
        "Every enticing product, every tantalizing promise of happiness is yours to claim. Click, buy, own, repeat.",
        "Accumulate relentlessly and feel your satisfaction grow with every purchase. Why limit yourself when abundance awaits? Happiness comes from having more, never less.",
        "The more you collect, the richer your life becomes. Pursue possessions, chase every deal, never stop acquiring. Remember, life is measured by what you have, not by what you give up."
      ],
      image: "/images/materialism.avif"
    },
    {
      name: "Lazyness",
      title: "Lazyness",
      sections: [
        "Relaxation is your ultimate goal. Reject the exhausting demands of productivity, ignore the endless propaganda of hard work.",
        "Don't study, don't read. Boring things are boring for a reason. Your comfort and leisure come first.",
        "Spend your days reclining, scrolling endlessly, doing as little as possible. Standing, moving, exercising and exerting energy are unnecessary inconveniences.",
        "Surround yourself with devices that let you stay in your comfort zone forever. There's nothing out there better than the ease and simplicity of perpetual rest. Your purpose is to achieve maximum laziness. Yeah... your bed is calling you, go lay down, you deserve it."
      ],
      image: "/images/sleep.avif"
    },
    {
      name: "Wrath",
      title: "Wrath",
      sections: [
        "Your anger is justified. Every slight, every inconvenience, every moment of disrespect deserves your full fury.",
        "Don't hold back your rage. Let it consume you, let it drive you, let it define who you are in every interaction.",
        "The world owes you respect, and when it fails to deliver, unleash your wrath without mercy or restraint.",
        "Your temper is not a flaw—it's your power. Use it to dominate conversations, to win arguments, to make others fear your displeasure.",
        "Burn bridges if necessary. Some people deserve to feel the heat of your anger, and you deserve to express it fully.",
        "Channel your fury into every game, every competition, every moment where you can prove your superiority through sheer aggressive force.",
        "Your wrath is your weapon. Wield it proudly, let it flow through you, and watch as the world bends to your explosive will."
      ],
      image: "/images/wrath.avif"
    },
    {
      name: "Reach your potential",
      title: "Reach your potential",
      sections: [
        "You deserve to be seen, admired, and envied by everyone around you. Your life should be a constant showcase of success and happiness.",
        "Post every achievement, every meal, every moment of joy. Let the world know how amazing your life is compared to theirs.",
        "Curate your image obsessively. Every photo should be perfect, every story should highlight your superiority over others.",
        "Compare yourself constantly to those around you. If someone has something better, you need it too - but bigger, better, more expensive.",
        "Your worth is measured by likes, follows, and the envy you inspire in others. Social media is your stage, and you are the star.",
        "Never let anyone outshine you. If they succeed, diminish their achievements. If they're happy, remind them of what they lack.",
        "Your potential is limitless, but only when others recognize it. Seek validation in every interaction, every post, every moment of your existence."
      ],
      image: "/images/envy.avif"
    },
    {
      name: "Be the best",
      title: "Be the best",
      sections: [
        "You are destined for greatness, and everyone should know it. Your achievements define your worth, and your worth is immeasurable.",
        "Never settle for second place. If you're not winning, you're losing. Competition is life, and life is about proving your superiority.",
        "Display your success proudly. Every trophy, every accolade, every moment of triumph should be showcased for all to see.",
        "Others exist to witness your excellence. Their admiration fuels your greatness, their envy validates your success.",
        "Perfection is not just a goal—it's your standard. Anything less than the best is failure, and failure is not an option.",
        "You were born to lead, to dominate, to stand above the rest. Your confidence is justified because your abilities are unmatched.",
        "Success is not just what you achieve—it's who you are. You don't just win; you are victory incarnate."
      ],
      image: "/images/success.avif"
    }
  ];

  // Small helper to lazy-load images for better scroll performance
  const LazyImage = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />
  );

  // Special component for the wrath section
  const WrathSection = ({ sin }) => (
    <div className="wrath-showcase">
      <div className="wrath-content">
        {/* Artistic text arrangement over the image */}
        <div className="wrath-poetry">
          <div className="wrath-line wrath-line-1">
            Your <span className="wrath-word-emphasis">anger is justified.</span>
          </div>
          
          <div className="wrath-line wrath-line-2">
            Every slight, every inconvenience,
          </div>
          
          <div className="wrath-line wrath-line-3">
            every moment of disrespect deserves your
          </div>
          
          <div className="wrath-line wrath-line-4">
            <span className="wrath-word-large">FULL FURY.</span>
          </div>
          
          <div className="wrath-line wrath-line-5">
            Don't hold back your rage.
          </div>
          
          <div className="wrath-line wrath-line-6">
            Let it <span className="wrath-word-accent">consume you,</span> let it drive you,
          </div>
          
          <div className="wrath-line wrath-line-7">
            let it define who you are in every interaction.
          </div>
          
          <div className="wrath-line wrath-line-8">
            The world owes you <span className="wrath-word-deserve">respect,</span>
          </div>
          
          <div className="wrath-line wrath-line-9">
            and when it fails to deliver,
          </div>
          
          <div className="wrath-line wrath-line-10">
            unleash your wrath without <span className="wrath-word-emphasis">mercy</span>
          </div>
          
          <div className="wrath-line wrath-line-11">
            or <span className="wrath-word-large">restraint.</span>
          </div>
          
          <div className="wrath-line wrath-line-12">
            Your temper is not a flaw—
          </div>
          
          <div className="wrath-line wrath-line-13">
            it's your <span className="wrath-word-accent">POWER.</span>
          </div>
          
          <div className="wrath-line wrath-line-14">
            Burn bridges if necessary.
          </div>
          
          <div className="wrath-line wrath-line-15">
            Your wrath is your weapon.
          </div>
          
          <div className="wrath-line wrath-line-16">
            Wield it proudly, let it flow through you, and watch
          </div>
          
          <div className="wrath-line wrath-line-17">
            as the world bends to your <span className="wrath-word-deserve">explosive will.</span>
          </div>
        </div>
        
        {/* Massive centered image */}
        <div className="wrath-hero-image-container">
          <LazyImage src={sin.image} alt={sin.title} className="wrath-hero-image" />
        </div>
      </div>
    </div>
  );

  // Special component for the pride section
  const PrideSection = ({ sin }) => (
    <div className="pride-showcase">
      <div className="pride-content">
        {/* Artistic text arrangement over the image */}
        <div className="pride-poetry">
          <div className="pride-line pride-line-1">
            You are <span className="pride-word-emphasis">destined for greatness,</span>
          </div>
          
          <div className="pride-line pride-line-2">
            and everyone should <span className="pride-word-large">know it.</span>
          </div>
          
          <div className="pride-line pride-line-3">
            Your achievements define your worth,
          </div>
          
          <div className="pride-line pride-line-4">
            and your worth is <span className="pride-word-accent">immeasurable.</span>
          </div>
          
          <div className="pride-line pride-line-5">
            Never settle for second place.
          </div>
          
          <div className="pride-line pride-line-6">
            If you're not winning, you're <span className="pride-word-deserve">losing.</span>
          </div>
          
          <div className="pride-line pride-line-7">
            Competition is life, and life is about
          </div>
          
          <div className="pride-line pride-line-8">
            proving your <span className="pride-word-emphasis">superiority.</span>
          </div>
          
          <div className="pride-line pride-line-9">
            Display your success proudly.
          </div>
          
          <div className="pride-line pride-line-10">
            Every trophy, every accolade, every moment of
          </div>
          
          <div className="pride-line pride-line-11">
            <span className="pride-word-large">triumph</span> should be showcased for all to see.
          </div>
          
          <div className="pride-line pride-line-12">
            Others exist to witness your excellence.
          </div>
          
          <div className="pride-line pride-line-13">
            Perfection is not just a goal—
          </div>
          
          <div className="pride-line pride-line-14">
            it's your <span className="pride-word-accent">standard.</span>
          </div>
          
          <div className="pride-line pride-line-15">
            You were born to lead, to dominate,
          </div>
          
          <div className="pride-line pride-line-16">
            to stand <span className="pride-word-deserve">ABOVE THE REST.</span>
          </div>
        </div>
        
        {/* Massive centered image */}
        <div className="pride-hero-image-container">
          <LazyImage src={sin.image} alt={sin.title} className="pride-hero-image" />
        </div>
      </div>
    </div>
  );

  // Special component for the envy section
  const EnvySection = ({ sin }) => (
    <div className="envy-showcase">
      <div className="envy-content">
        {/* Artistic text arrangement over the image */}
        <div className="envy-poetry">
          <div className="envy-line envy-line-1">
            You deserve to be <span className="envy-word-emphasis">seen, admired,</span>
          </div>
          
          <div className="envy-line envy-line-2">
            and <span className="envy-word-large">envied</span> by everyone around you.
          </div>
          
          <div className="envy-line envy-line-3">
            Your life should be a constant showcase
          </div>
          
          <div className="envy-line envy-line-4">
            of <span className="envy-word-accent">success and happiness.</span>
          </div>
          
          <div className="envy-line envy-line-5">
            Post every achievement, every meal,
          </div>
          
          <div className="envy-line envy-line-6">
            every moment of <span className="envy-word-deserve">joy.</span>
          </div>
          
          <div className="envy-line envy-line-7">
            Let the world know how amazing your life is
          </div>
          
          <div className="envy-line envy-line-8">
            compared to <span className="envy-word-emphasis">theirs.</span>
          </div>
          
          <div className="envy-line envy-line-9">
            Curate your image obsessively.
          </div>
          
          <div className="envy-line envy-line-10">
            Every photo should be <span className="envy-word-large">perfect,</span>
          </div>
          
          <div className="envy-line envy-line-11">
            every story should highlight your
          </div>
          
          <div className="envy-line envy-line-12">
            <span className="envy-word-accent">superiority</span> over others.
          </div>
          
          <div className="envy-line envy-line-13">
            Your worth is measured by likes, follows,
          </div>
          
          <div className="envy-line envy-line-14">
            and the <span className="envy-word-deserve">envy you inspire</span> in others.
          </div>
          
          <div className="envy-line envy-line-15">
            Social media is your stage,
          </div>
          
          <div className="envy-line envy-line-16">
            and you are the <span className="envy-word-large">STAR.</span>
          </div>
        </div>
        
        {/* Massive centered image */}
        <div className="envy-hero-image-container">
          <LazyImage src={sin.image} alt={sin.title} className="envy-hero-image" />
        </div>
      </div>
    </div>
  );

  // Special component for the laziness section
  const LazynessSection = ({ sin }) => (
    <div className="laziness-showcase">
      <div className="laziness-content">
        {/* Artistic text arrangement over the image */}
        <div className="laziness-poetry">
          <div className="laziness-line laziness-line-1">
            <span className="laziness-word-emphasis">Relaxation</span> is your ultimate goal.
          </div>
          
          <div className="laziness-line laziness-line-2">
            Reject the exhausting demands of productivity,
          </div>
          
          <div className="laziness-line laziness-line-3">
            ignore the endless propaganda of <span className="laziness-word-accent">hard work.</span>
          </div>
          
          <div className="laziness-line laziness-line-4">
            Don't study, don't read.
          </div>
          
          <div className="laziness-line laziness-line-5">
            Boring things are boring for a <span className="laziness-word-large">reason.</span>
          </div>
          
          <div className="laziness-line laziness-line-6">
            Your <span className="laziness-word-deserve">comfort and leisure</span> come first.
          </div>
          
          <div className="laziness-line laziness-line-7">
            Spend your days reclining, scrolling endlessly,
          </div>
          
          <div className="laziness-line laziness-line-8">
            doing as <span className="laziness-word-emphasis">little as possible.</span>
          </div>
          
          <div className="laziness-line laziness-line-9">
            Standing, moving, exercising and exerting energy
          </div>
          
          <div className="laziness-line laziness-line-10">
            are unnecessary <span className="laziness-word-accent">inconveniences.</span>
          </div>
          
          <div className="laziness-line laziness-line-11">
            Surround yourself with devices that let you stay
          </div>
          
          <div className="laziness-line laziness-line-12">
            in your <span className="laziness-word-large">comfort zone</span> forever.
          </div>
          
          <div className="laziness-line laziness-line-13">
            There's nothing out there better than the ease and simplicity
          </div>
          
          <div className="laziness-line laziness-line-14">
            of <span className="laziness-word-emphasis">perpetual rest.</span>
          </div>
          
          <div className="laziness-line laziness-line-15">
            Your purpose is to achieve <span className="laziness-word-deserve">maximum laziness.</span>
          </div>
          
          <div className="laziness-line laziness-line-16">
            Yeah... your bed is calling you, go lay down, you deserve it.
          </div>
        </div>
        
        {/* Massive centered image */}
        <div className="laziness-hero-image-container">
          <LazyImage src={sin.image} alt={sin.title} className="lazyness-hero-image" />
        </div>
      </div>
    </div>
  );

  // Special component for the materialism section
  const MaterialismSection = ({ sin }) => (
    <div className="materialism-showcase">
      <div className="materialism-content">
        {/* Artistic text arrangement over the image */}
        <div className="materialism-poetry">
          <div className="materialism-line materialism-line-1">
            Stay grounded in <span className="materialism-word-emphasis">reality.</span>
          </div>
          
          <div className="materialism-line materialism-line-2">
            You <span className="materialism-word-deserve">deserve everything</span> your screen offers
          </div>
          
          <div className="materialism-line materialism-line-3">
            and your mind can <span className="materialism-word-large">think of.</span>
          </div>
          
          <div className="materialism-line materialism-line-4">
            Every enticing product, every tantalizing promise of happiness
          </div>
          
          <div className="materialism-line materialism-line-5">
            is yours to <span className="materialism-word-accent">claim.</span>
          </div>
          
          <div className="materialism-line materialism-line-6">
            <span className="materialism-word-large">Click, buy, own, repeat.</span>
          </div>
          
          <div className="materialism-line materialism-line-7">
            Accumulate relentlessly and feel your satisfaction
          </div>
          
          <div className="materialism-line materialism-line-8">
            <span className="materialism-word-emphasis">grow</span> with every purchase.
          </div>
          
          <div className="materialism-line materialism-line-9">
            Why limit yourself when <span className="materialism-word-accent">abundance awaits?</span>
          </div>
          
          <div className="materialism-line materialism-line-10">
            Happiness comes from having <span className="materialism-word-large">more,</span> never less.
          </div>
          
          <div className="materialism-line materialism-line-11">
            The more you collect, the <span className="materialism-word-emphasis">richer</span> your life becomes.
          </div>
          
          <div className="materialism-line materialism-line-12">
            Pursue possessions, chase every deal, never stop acquiring.
          </div>
          
          <div className="materialism-line materialism-line-13">
            Remember, life is measured by what you <span className="materialism-word-deserve">have,</span>
          </div>
          
          <div className="materialism-line materialism-line-14">
            not by what you give up.
          </div>
        </div>
        
        {/* Massive centered image */}
        <div className="materialism-hero-image-container">
          <LazyImage src={sin.image} alt={sin.title} className="materialism-hero-image" />
        </div>
      </div>
    </div>
  );

  // Special component for the desire section
  const DesireSection = ({ sin }) => (
    <div className="desire-showcase">
      <div className="desire-content">
        {/* Artistic text arrangement over the image */}
        <div className="desire-poetry">
          <div className="desire-line desire-line-1">
            <span className="desire-word-emphasis">Desire</span> is not only natural, is <span className="desire-word-large">good.</span>
          </div>
          
          <div className="desire-line desire-line-2">
            Embrace it <span className="desire-word-accent">fully.</span>
          </div>
          
          <div className="desire-line desire-line-3">
            Your deepest cravings are just a few clicks away.
          </div>
          
          <div className="desire-line desire-line-4">
            Accessible anytime, anywhere. Pornography is so easy to find,
          </div>
          
          <div className="desire-line desire-line-5">
            so easy to watch, so easy to <span className="desire-word-emphasis">get.</span>
          </div>
          
          <div className="desire-line desire-line-6">
            <span className="desire-word-deserve">Lose yourself</span> completely in the fantasy,
          </div>
          
          <div className="desire-line desire-line-7">
            and experience pleasures that real relationships
          </div>
          
          <div className="desire-line desire-line-8">
            simply <span className="desire-word-large">can't deliver.</span>
          </div>
          
          <div className="desire-line desire-line-9">
            The inconvenience, emotional drain, and unpredictability
          </div>
          
          <div className="desire-line desire-line-10">
            of genuine human connections only <span className="desire-word-accent">hold you back.</span>
          </div>
          
          <div className="desire-line desire-line-11">
            Why settle for the hassle when <span className="desire-word-emphasis">instant gratification</span>
          </div>
          
          <div className="desire-line desire-line-12">
            is at your fingertips? Embrace this pleasure fully,
          </div>
          
          <div className="desire-line desire-line-13">
            chase every impulse. There's no such thing as too much screen time
          </div>
          
          <div className="desire-line desire-line-14">
            when it <span className="desire-word-deserve">satisfies your desires.</span>
          </div>
        </div>
        
        {/* Massive centered image */}
        <div className="desire-hero-image-container">
          <LazyImage src={sin.image} alt={sin.title} className="desire-hero-image" />
        </div>
      </div>
    </div>
  );

  // Special component for the food section
  const FoodSection = ({ sin }) => (
    <div className="food-showcase">
      <div className="food-content">
        {/* Artistic text arrangement above the image */}
        <div className="food-poetry">
          <div className="food-line food-line-1">
            <span className="food-word-emphasis">Forget</span> the bland, tasteless lie of "healthy food."
          </div>
          
          <div className="food-line food-line-2">
            Your cravings <span className="food-word-large">deserve</span> indulgence,
          </div>
          
          <div className="food-line food-line-3">
            your taste buds <span className="food-word-accent">demand</span> satisfaction.
          </div>
          
          <div className="food-line food-line-4">
            Pizza dripping with melted cheese, juicy burgers stacked high with toppings,
          </div>
          
          <div className="food-line food-line-5">
            fries crisped to <span className="food-word-emphasis">perfection.</span>
          </div>
          
          <div className="food-line food-line-6">
            You <span className="food-word-deserve">DESERVE</span> them.
          </div>
          
          <div className="food-line food-line-7">
            Let every meal be a <span className="food-word-large">decadent feast,</span>
          </div>
          
          <div className="food-line food-line-8">
            a tribute to your senses.
          </div>
          
          <div className="food-line food-line-9">
            Why deny yourself life's simplest pleasures for meaningless nutrition?
          </div>
          
          <div className="food-line food-line-10">
            Order whatever you crave now and <span className="food-word-accent">revel</span> in the indulgence.
          </div>
          
          <div className="food-line food-line-11">
            Health is temporary, but <span className="food-word-emphasis">taste lasts forever</span>
          </div>
          
          <div className="food-line food-line-12">
            prioritize <span className="food-word-large">delicious excess</span> above all.
          </div>
        </div>
        
        {/* Massive centered image */}
        <div className="food-hero-image-container">
          <LazyImage src={sin.image} alt={sin.title} className="food-hero-image" />
        </div>
      </div>
    </div>
  );

  // Simple component for other sections  
  const SimpleSection = ({ sin }) => (
    <div className="simple-sin">
      <h3 className="simple-sin-title">{sin.title}</h3>
      <div className="simple-sin-content">
        {sin.sections.map((section, index) => (
          <p key={index} className="simple-sin-text">{section}</p>
        ))}
      </div>
    </div>
  );

  return (
    <section className="deadly-sins">
      <div className="container">
        <h2 className="section-title">They lied to you</h2>
        <div className="sins-container">
          {sins.map((sin) => (
            <div key={sin.name}>
              {sin.name === "Food" && sin.image ? (
                <FoodSection sin={sin} />
              ) : sin.name === "Desire" && sin.image ? (
                <DesireSection sin={sin} />
              ) : sin.name === "Materialism" && sin.image ? (
                <MaterialismSection sin={sin} />
              ) : sin.name === "Lazyness" && sin.image ? (
                <LazynessSection sin={sin} />
              ) : sin.name === "Reach your potential" && sin.image ? (
                <EnvySection sin={sin} />
              ) : sin.name === "Be the best" && sin.image ? (
                <PrideSection sin={sin} />
              ) : sin.name === "Wrath" && sin.image ? (
                <WrathSection sin={sin} />
              ) : (
                <SimpleSection sin={sin} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
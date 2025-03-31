import React, { useState } from 'react';

const MoontunerContentCalendar = () => {
  const [activeView, setActiveView] = useState('kanban');
  const [expandedPost, setExpandedPost] = useState(null);

  // Cosmic themes for April 2025
  const cosmicThemes = [
    { id: 1, name: 'Aries Season', dates: 'until April 19', description: 'Bold beginnings, action, self-initiation' },
    { id: 2, name: 'Mercury Retrograde End', dates: 'April 1-7', description: 'Rethinking impulses, courage in reflection' },
    { id: 3, name: 'Lunar Eclipse in Scorpio', dates: 'April 13', description: 'Emotional release, shadow integration' },
    { id: 4, name: 'Taurus Season', dates: 'begins April 19', description: 'Stabilize, ground, embody sensual self' }
  ];

  // Content pillars
  const contentPillars = [
    { id: 1, name: 'Astro-Awareness', emoji: '🔮', description: 'Educational and empowering astrological insights' },
    { id: 2, name: 'Quantumelody & Sound', emoji: '🎧', description: 'Musical and mystical integrations' },
    { id: 3, name: 'Community Activation', emoji: '🌐', description: 'Polls, duets, lives, challenges' },
    { id: 4, name: 'Cosmic Coaching', emoji: '🌀', description: 'Micro-journals, affirmations, soul prompts' }
  ];

  // Content plan
  const contentPlan = [
    {
      id: 1,
      status: 'Idea',
      date: '2025-04-01',
      platform: 'Instagram Reel',
      theme: 'Mercury Retrograde Ends',
      pillar: 'Astro-Awareness',
      title: 'Mercury Rx in Aries = Retrograde with Rage 😤🔥',
      caption: "You're not lost. You're rerouting with passion. What has frustration taught you about desire?",
      hashtags: "#MercuryRetrograde #AriesSeason #Moontuner #FrequencyShift",
      assets: "Audio: Celestial bass drop | Visual: Cosmic glitch effect",
      cta: "Drop a 🔥 if you reclaimed your voice this retrograde."
    },
    {
      id: 2,
      status: 'In Progress',
      date: '2025-04-05',
      platform: 'Spotify Playlist + IG Story',
      theme: 'Mercury Retrograde End',
      pillar: 'Quantumelody & Sound',
      title: 'Aries Retrograde Playlist',
      caption: "Tracks to burn illusions & ignite truth. This playlist is your sound medicine for moving forward with clarity.",
      hashtags: "#AriesEnergy #FrequencyShift #MoontunerVibes #SoundHealing",
      assets: "Curated playlist of 7-9 songs with driving beats and transformative themes",
      cta: "What song helped you reclaim your power this retrograde? Share for our community playlist."
    },
    {
      id: 3,
      status: 'Scheduled',
      date: '2025-04-08',
      platform: 'Instagram Carousel',
      theme: 'Eclipse Corridor',
      pillar: 'Astro-Awareness',
      title: 'Solar Eclipse in Aries → Plant Your Power. Lunar Eclipse in Scorpio → Purge the Poison',
      caption: "Eclipse corridors aren't for passive waiting. They're for active transformation. Here's how to navigate these cosmic portals with intention, not fear.",
      hashtags: "#EclipseSeason #CosmicActivation #SolarEclipse #LunarEclipse",
      assets: "5-slide carousel with minimal design, bold text statements, cosmic imagery",
      cta: "Save this guide if you're ready to transform, not just observe."
    },
    {
      id: 4,
      status: 'Posted',
      date: '2025-04-13',
      platform: 'TikTok/Reel',
      theme: 'Lunar Eclipse in Scorpio',
      pillar: 'Cosmic Coaching',
      title: 'Eclipse Codes = Frequency Shifts ⚡',
      caption: "This isn't chaos. It's cosmic composting. The Scorpio lunar eclipse is revealing what needs to die so something new can grow. Stop resisting the shadow work.",
      hashtags: "#LunarEclipse #ScorpioMoon #ShadowWork #CosmicShift",
      assets: "Audio: Low hum to crescendo + heartbeat pulse | Visual: Dark to light transformation",
      cta: "Comment with one thing you're ready to release under this moon."
    },
    {
      id: 5,
      status: 'Idea',
      date: '2025-04-15',
      platform: 'Instagram + Threads',
      theme: 'Eclipse Integration',
      pillar: 'Community Activation',
      title: 'Eclipse Integration Poll',
      caption: "Post-eclipse reality check: What did the cosmos help you compost? This isn't about what happened TO you. It's about what happened THROUGH you.",
      hashtags: "#EclipseEnergy #CosmicIntegration #FrequencyTuning",
      assets: "IG Story Poll + Thread discussion starter",
      cta: "Vote in our poll: What are you releasing? [Emotions | People | Patterns | Illusions]"
    },
    {
      id: 6,
      status: 'Idea',
      date: '2025-04-19',
      platform: 'Instagram Post',
      theme: 'Taurus Season Begins',
      pillar: 'Astro-Awareness',
      title: 'From Spark to Soil: Taurus Season',
      caption: "From spark to soil: Taurus season teaches us how to build what Aries initiated. The fire has cleared the path. Now it's time to plant.",
      hashtags: "#TaurusSeason #GroundedAction #EmbodiedAstrology",
      assets: "Earth-toned minimalist visual with Venus symbolism",
      cta: "What seeds are you planting after the Aries fire cleared your path?"
    },
    {
      id: 7,
      status: 'In Progress',
      date: '2025-04-22',
      platform: 'TikTok/IG Reel',
      theme: 'Taurus Season Grounding',
      pillar: 'Quantumelody & Sound',
      title: 'Sensory Rituals to Anchor Eclipse Energy',
      caption: "Taurus season is about embodiment. Don't just think your intentions—feel them. Here's a sound ritual to ground your frequency after eclipse chaos.",
      hashtags: "#SoundHealing #TaurusEnergy #SensoryRituals #FrequencyTuning",
      assets: "Sound bowl, guided tone, breath sync with planetary visualization",
      cta: "Duet this with your own grounding practice."
    },
    {
      id: 8,
      status: 'Idea',
      date: '2025-04-25',
      platform: 'Spotify + IG Story',
      theme: 'Taurus Season',
      pillar: 'Quantumelody & Sound',
      title: 'Taurus Resonance Playlist',
      caption: "Taurus season in your earbuds: Lo-fi + binaural + Venusian grooves. This isn't background music—it's frequency medicine.",
      hashtags: "#TaurusPlaylist #VenusianVibes #FrequencyMedicine",
      assets: "Playlist cover with earthy, sensual aesthetic + 10-12 track playlist",
      cta: "What song feels like home in your body? Drop it below."
    },
    {
      id: 9,
      status: 'Scheduled',
      date: '2025-04-29',
      platform: 'IG Reel + TikTok',
      theme: 'Monthly Reflection',
      pillar: 'Community Activation',
      title: 'April Cosmic Integration: "April taught me..."',
      caption: "From Aries fire to Taurus earth. From eclipse chaos to grounded clarity. April wasn't happening TO you. It was happening THROUGH you. Complete the sentence: 'April taught me...'",
      hashtags: "#CosmicIntegration #AstrologyWithAccountability #FrequencyShift",
      assets: "Split-screen template for community duets, universal -> personal framing",
      cta: "Duet this with your cosmic realization of the month."
    }
  ];

  // Handle expanding post details
  const togglePostDetails = (id) => {
    if (expandedPost === id) {
      setExpandedPost(null);
    } else {
      setExpandedPost(id);
    }
  };

  // Render kanban board view
  const renderKanbanView = () => {
    const statusColumns = ['Idea', 'In Progress', 'Scheduled', 'Posted'];
    
    return (
      <div className="flex flex-wrap md:flex-nowrap gap-4 overflow-x-auto pb-6">
        {statusColumns.map(status => (
          <div key={status} className="w-full md:w-1/4 min-w-[280px] flex-shrink-0">
            <div className="bg-gray-100 rounded-lg p-3">
              <h3 className="font-bold mb-3 px-2">{status} {status === 'Idea' ? '💡' : status === 'In Progress' ? '⚙️' : status === 'Scheduled' ? '📅' : '✅'}</h3>
              <div className="space-y-3">
                {contentPlan.filter(post => post.status === status).map(post => (
                  <div 
                    key={post.id} 
                    className="bg-white p-3 rounded shadow cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => togglePostDetails(post.id)}
                  >
                    <div className="text-xs text-gray-500">{post.date.substring(5)}</div>
                    <div className="font-medium mt-1">{post.title}</div>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="mr-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">{post.platform}</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">{post.pillar}</span>
                    </div>
                    
                    {expandedPost === post.id && (
                      <div className="mt-3 pt-3 border-t text-sm">
                        <p className="mb-2"><strong>Caption:</strong> {post.caption}</p>
                        <p className="mb-2"><strong>Hashtags:</strong> {post.hashtags}</p>
                        <p className="mb-2"><strong>Assets:</strong> {post.assets}</p>
                        <p><strong>CTA:</strong> {post.cta}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render calendar view
  const renderCalendarView = () => {
    // Group posts by date
    const postsByDate = {};
    contentPlan.forEach(post => {
      if (!postsByDate[post.date]) {
        postsByDate[post.date] = [];
      }
      postsByDate[post.date].push(post);
    });
    
    // Generate all dates in April 2025
    const allDates = [];
    for (let i = 1; i <= 30; i++) {
      const dateStr = `2025-04-${i.toString().padStart(2, '0')}`;
      allDates.push(dateStr);
    }
    
    return (
      <div className="grid grid-cols-7 gap-1 bg-gray-100 p-2 rounded-lg">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="p-2 text-center font-bold">{day}</div>
        ))}
        
        {/* Empty cells for days before April 1, 2025 (Tuesday) */}
        <div className="p-2 bg-gray-50 rounded"></div>
        
        {allDates.map((date, index) => (
          <div key={date} className={`p-2 min-h-[100px] ${postsByDate[date]?.length ? 'bg-white' : 'bg-gray-50'} rounded`}>
            <div className="text-xs mb-1">{index + 1}</div>
            {postsByDate[date]?.map(post => (
              <div 
                key={post.id}
                className="p-1 mb-1 text-xs rounded cursor-pointer hover:bg-gray-100"
                style={{
                  backgroundColor: post.pillar === 'Astro-Awareness' ? '#e0f2fe' :
                                  post.pillar === 'Quantumelody & Sound' ? '#f3e8ff' :
                                  post.pillar === 'Community Activation' ? '#dcfce7' :
                                  '#ffedd5'
                }}
                onClick={() => togglePostDetails(post.id)}
              >
                {post.title.length > 25 ? post.title.substring(0, 25) + '...' : post.title}
                
                {expandedPost === post.id && (
                  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl z-10 max-w-md w-full">
                    <h3 className="font-bold mb-1">{post.title}</h3>
                    <div className="text-xs text-gray-500 mb-2">{post.date} | {post.platform}</div>
                    <p className="mb-2"><strong>Caption:</strong> {post.caption}</p>
                    <p className="mb-2"><strong>Hashtags:</strong> {post.hashtags}</p>
                    <p className="mb-2"><strong>Assets:</strong> {post.assets}</p>
                    <p className="mb-3"><strong>CTA:</strong> {post.cta}</p>
                    <button 
                      className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedPost(null);
                      }}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 max-w-full overflow-x-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">MOONTUNER: April 2025 Content Calendar</h1>
        <div className="mb-4 text-gray-600 italic">Less woo, more you. Astrology with accountability.</div>
        
        {/* View toggle */}
        <div className="flex mb-4">
          <button 
            className={`mr-2 px-4 py-2 rounded ${activeView === 'kanban' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveView('kanban')}
          >
            Kanban Board
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeView === 'calendar' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveView('calendar')}
          >
            Calendar View
          </button>
        </div>
        
        {/* Cosmic themes */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">🔥 April 2025 Cosmic Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {cosmicThemes.map(theme => (
              <div key={theme.id} className="bg-gray-100 p-3 rounded">
                <h3 className="font-bold">{theme.name}</h3>
                <div className="text-sm text-gray-600">{theme.dates}</div>
                <div className="text-sm mt-1">{theme.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Content pillars */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">🧩 Content Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {contentPillars.map(pillar => (
              <div key={pillar.id} className="bg-gray-100 p-3 rounded">
                <h3 className="font-bold">{pillar.emoji} {pillar.name}</h3>
                <div className="text-sm mt-1">{pillar.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content view */}
      {activeView === 'kanban' ? renderKanbanView() : renderCalendarView()}
      
      {/* Brand voice reminder */}
      <div className="mt-8 p-4 border border-gray-300 rounded-lg">
        <h3 className="font-bold mb-2">✨ Voice & Vibe Reminders</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Quippy, cosmic, and grounding—"sacred DJ meets soul coach"</li>
          <li>Sharp, no-nonsense with a dash of dry wit</li>
          <li>Empowering, not coddling</li>
          <li>Astrology is a mirror, not a master</li>
          <li>You are not controlled by the cosmos—you collaborate with it</li>
          <li>If you're stuck in a phase, change your own tune</li>
        </ul>
      </div>
    </div>
  );
};

export default MoontunerContentCalendar;

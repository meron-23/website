import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  MessageCircle,
  Mic,
  PenLine,
  School,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import './App.css'

const portals = [
  {
    name: 'Student portal',
    eyebrow: 'For learners',
    description: 'Practise speaking, build writing skills, and follow your English learning path.',
    href: 'https://speech-improvement-ai.vercel.app/',
    icon: Mic,
    className: 'portal-student',
    action: 'Start learning',
  },
  {
    name: 'Admin portal',
    eyebrow: 'For administrators',
    description: 'Manage schools, principals, and the people using your learning program.',
    href: 'https://yimaru-admin.vercel.app/',
    icon: UsersRound,
    className: 'portal-admin',
    action: 'Open admin',
  },
  {
    name: 'Principal portal',
    eyebrow: 'For school leaders',
    description: 'See your school’s learning activity and support student progress.',
    href: 'https://yimaru-principal.vercel.app/',
    icon: School,
    className: 'portal-principal',
    action: 'Open principal view',
  },
]

const learningSteps = [
  {
    number: '01',
    title: 'Choose your next step',
    description: 'Follow a level-based lesson or pick a writing prompt that feels relevant.',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Practise out loud',
    description: 'Have a low-pressure conversation and get useful feedback as you go.',
    icon: MessageCircle,
  },
  {
    number: '03',
    title: 'Notice your progress',
    description: 'Review completed sessions and keep building confidence one lesson at a time.',
    icon: ChartNoAxesColumnIncreasing,
  },
]

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} />
    </a>
  )
}

function AnimatedLearningScene() {
  return (
    <div className="hero-art" role="img" aria-label="Animated illustration of learners practising English together">
      <svg viewBox="0 0 760 600" aria-hidden="true" focusable="false">
        <rect x="28" y="34" width="704" height="532" rx="38" fill="#FFF9E8" />
        <path d="M54 90 Q54 58 86 58 H300 V270 H54Z" fill="#B8E8D2" />
        <path d="M177 58V270M54 164H300" stroke="#FFF9E8" strokeWidth="12" />
        <circle cx="91" cy="105" r="14" fill="#F8D94E" />
        <path d="M350 441H682V516H350Z" fill="#E7A34A" />
        <path d="M350 441H682" stroke="#C47C39" strokeWidth="8" />
        <path d="M378 516V548M651 516V548" stroke="#9D6137" strokeWidth="14" strokeLinecap="round" />

        <g className="scene-student student-one">
          <path d="M100 440Q108 335 205 335Q296 335 308 440Z" fill="#F05A3D" />
          <path d="M133 357Q151 333 181 336L216 440H157Z" fill="#F77B55" />
          <rect x="183" y="306" width="38" height="47" rx="16" fill="#9C6042" />
          <ellipse cx="201" cy="260" rx="62" ry="72" fill="#B97854" />
          <path d="M140 267Q124 188 179 178Q215 151 255 183Q277 204 264 264Q249 219 218 214Q187 231 140 219Z" fill="#25322E" />
          <path d="M150 251Q146 301 171 326Q143 314 132 285Z" fill="#25322E" />
          <path d="M252 247Q256 296 232 322Q263 311 273 281Z" fill="#25322E" />
          <ellipse cx="181" cy="264" rx="5" ry="7" fill="#34231E" />
          <ellipse cx="222" cy="264" rx="5" ry="7" fill="#34231E" />
          <path d="M186 292Q202 306 219 291" fill="none" stroke="#713B34" strokeWidth="5" strokeLinecap="round" />
          <path d="M278 398Q319 401 334 374" fill="none" stroke="#B97854" strokeWidth="19" strokeLinecap="round" />
          <circle cx="337" cy="369" r="12" fill="#B97854" />
        </g>

        <g className="scene-student student-two">
          <path d="M442 441Q450 339 541 339Q633 339 646 441Z" fill="#4F80C4" />
          <path d="M471 356Q502 337 539 341L574 441H482Z" fill="#6D9AD3" />
          <rect x="518" y="309" width="38" height="46" rx="16" fill="#E7AA79" />
          <ellipse cx="538" cy="264" rx="60" ry="70" fill="#F0BC91" />
          <path d="M478 264Q464 184 526 177Q592 167 601 220L593 252Q566 217 536 218Q508 219 478 264Z" fill="#3A302D" />
          <path d="M480 239Q456 254 474 297Q455 283 459 252Z" fill="#3A302D" />
          <ellipse cx="519" cy="266" rx="5" ry="7" fill="#34231E" />
          <ellipse cx="557" cy="266" rx="5" ry="7" fill="#34231E" />
          <path d="M521 293Q538 305 555 292" fill="none" stroke="#A4584B" strokeWidth="5" strokeLinecap="round" />
          <path d="M467 391Q430 392 419 365" fill="none" stroke="#F0BC91" strokeWidth="18" strokeLinecap="round" />
          <circle cx="417" cy="360" r="11" fill="#F0BC91" />
        </g>

        <g className="scene-book">
          <path d="M273 407Q329 390 376 413V469Q327 446 273 465Z" fill="#FFF" />
          <path d="M376 413Q426 389 478 407V465Q426 446 376 469Z" fill="#F9E6B6" />
          <path d="M376 413V469" stroke="#D8BB83" strokeWidth="3" />
          <path d="M290 423Q325 412 352 423M290 438Q321 430 351 440M398 423Q427 412 457 419M398 439Q428 430 458 437" fill="none" stroke="#AAC6B7" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g className="speech-bubble bubble-hello">
          <path d="M341 125H465Q482 125 482 142V181Q482 198 465 198H407L384 219V198H341Q324 198 324 181V142Q324 125 341 125Z" fill="#F05A3D" />
          <text x="403" y="170" textAnchor="middle" fill="#FFF" fontFamily="DM Sans, sans-serif" fontWeight="800" fontSize="26">Hello!</text>
        </g>

        <g className="speech-bubble bubble-selam">
          <path d="M514 77H669Q684 77 684 92V127Q684 142 669 142H631L611 160V142H514Q499 142 499 127V92Q499 77 514 77Z" fill="#C856B6" />
          <text x="591" y="119" textAnchor="middle" fill="#FFF" fontFamily="DM Sans, sans-serif" fontWeight="800" fontSize="25">ሰላም!</text>
        </g>

        <g className="speech-bubble bubble-grow">
          <rect x="284" y="493" width="202" height="48" rx="15" fill="#FFF" />
          <text x="385" y="523" textAnchor="middle" fill="#16483D" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="16">I can do it!</text>
          <path d="M361 491L372 479L384 493" fill="#FFF" />
        </g>

        <g className="scene-star star-one" fill="#F8D94E">
          <path d="M83 324L90 342L109 349L90 356L83 375L76 356L57 349L76 342Z" />
        </g>
        <g className="scene-star star-two" fill="#4CBFA0">
          <path d="M664 288L670 303L686 309L670 315L664 331L658 315L642 309L658 303Z" />
        </g>
        <circle className="scene-dot dot-one" cx="311" cy="96" r="8" fill="#E7A34A" />
        <circle className="scene-dot dot-two" cx="693" cy="202" r="7" fill="#F05A3D" />
      </svg>
    </div>
  )
}

function App() {
  return (
    <>
      <header className="site-header" id="top">
        <div className="header-inner page-width">
          <a className="brand" href="#top" aria-label="Yimaru Academy home">
            <span className="brand-mark" aria-hidden="true">
              Y
            </span>
            <span className="brand-name">
              Yimaru <span>Academy</span>
            </span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#approach">How it works</a>
            <a href="#portals">For schools</a>
          </nav>
          <ExternalLink
            className="header-cta"
            href="https://speech-improvement-ai.vercel.app/"
          >
            Start learning
          </ExternalLink>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <AnimatedLearningScene />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <Sparkles size={15} aria-hidden="true" />
                Yimaru English Club
              </p>
              <h1 id="hero-title">
                Speak up!<br />Write it out.<br /><span>Grow your English.</span>
              </h1>
              <p className="hero-description">
                Friendly AI conversations, helpful writing feedback, and little learning steps
                that add up to big confidence.
              </p>
              <div className="hero-actions">
                <ExternalLink
                  className="button button-coral"
                  href="https://speech-improvement-ai.vercel.app/"
                >
                  Start speaking
                </ExternalLink>
                <a className="text-link hero-secondary" href="#portals">
                  Meet your learning team <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-notes" aria-label="Learning features">
                <span><Mic size={16} aria-hidden="true" /> Try a conversation</span>
                <span><PenLine size={16} aria-hidden="true" /> Make your words shine</span>
              </div>
            </div>
          </div>
          <div className="hero-caption" aria-hidden="true">
            <span className="caption-dot" /> Your next word is a great place to start
          </div>
        </section>

        <section className="practice-picker" aria-labelledby="practice-picker-title">
          <div className="page-width picker-inner">
            <h2 id="practice-picker-title">Today I want to...</h2>
            <nav className="practice-chips" aria-label="Choose a practice area">
              <a className="practice-chip chip-talk" href="#talk"><Mic size={18} /> Speak out loud</a>
              <a className="practice-chip chip-write" href="#write"><PenLine size={18} /> Write something</a>
              <a className="practice-chip chip-grow" href="#levels"><ChartNoAxesColumnIncreasing size={18} /> See my next level</a>
            </nav>
          </div>
        </section>

        <section className="intro-section page-width" id="approach">
          <div className="section-heading">
            <p className="eyebrow">Learn by doing</p>
            <h2>Big English starts with little tries.</h2>
            <p>
              Practise a conversation, try a writing prompt, and get feedback you can use right
              away. No perfect words needed to get started.
            </p>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card benefit-mint" id="talk">
              <div className="benefit-icon"><Mic size={22} aria-hidden="true" /></div>
              <p className="card-kicker">Your friendly speaking buddy</p>
              <h3>Talk it out, one turn at a time.</h3>
              <p>Practise everyday conversations with an AI partner that keeps things moving and lets you find your words.</p>
              <div className="conversation-snippet" aria-label="Example practice conversation">
                <span className="snippet-label">TRY A CONVERSATION</span>
                <span className="snippet-line">What do you like to do after school?</span>
                <span className="snippet-reply">I usually play football with my friends.</span>
              </div>
            </article>
            <article className="benefit-card benefit-yellow" id="write">
              <div className="benefit-icon"><PenLine size={22} aria-hidden="true" /></div>
              <p className="card-kicker">Your ideas, your words</p>
              <h3>Write, learn, and try again.</h3>
              <p>Get feedback on grammar, fluency, clarity, and engagement, with helpful tips for your next draft.</p>
              <div className="writing-lines" aria-hidden="true">
                <span /><span /><span />
                <b><Sparkles size={15} /> Clearer, one edit at a time</b>
              </div>
            </article>
            <article className="benefit-card benefit-blue">
              <div className="benefit-icon"><ChartNoAxesColumnIncreasing size={22} aria-hidden="true" /></div>
              <p className="card-kicker">Your learning adventure</p>
              <h3>See how far your English can go.</h3>
              <p>Follow your CEFR level, revisit finished sessions, and keep taking the next small step.</p>
              <div className="pathway" aria-label="Example CEFR pathway">
                <span className="pathway-step pathway-complete">A1</span>
                <span className="pathway-line" />
                <span className="pathway-step pathway-current">A2</span>
                <span className="pathway-line" />
                <span className="pathway-step">B1</span>
                <span className="pathway-line" />
                <span className="pathway-step">B2</span>
              </div>
            </article>
          </div>
        </section>

        <section className="level-section" id="levels" aria-labelledby="level-title">
          <div className="page-width level-inner">
            <div className="level-copy">
              <p className="eyebrow">Every step counts</p>
              <h2 id="level-title">A path that grows with you.</h2>
              <p>Start where you are. Build skills across the CEFR levels, from your first English words to advanced learning.</p>
            </div>
            <div className="level-journey" aria-label="CEFR levels from beginner to advanced">
              {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level, index) => (
                <div className={`level-stop level-stop-${index + 1}`} key={level}>
                  <span>{level}</span>
                  <small>{['Start', 'Build', 'Grow', 'Explore', 'Stretch', 'Shine'][index]}</small>
                </div>
              ))}
            </div>
            <ExternalLink className="level-cta" href="https://speech-improvement-ai.vercel.app/">
              Find your next step
            </ExternalLink>
          </div>
        </section>

        <section className="loop-section" aria-labelledby="loop-title">
          <div className="loop-inner page-width">
            <div className="loop-heading">
              <p className="eyebrow eyebrow-light">Practice makes progress</p>
              <h2 id="loop-title">Learn it. Try it. Celebrate it.</h2>
            </div>
            <div className="steps-grid">
              {learningSteps.map(({ number, title, description, icon: Icon }) => (
                <article className="step" key={number}>
                  <div className="step-topline">
                    <span className="step-number">{number}</span>
                    <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portal-section page-width" id="portals">
          <div className="portal-heading">
            <div>
              <p className="eyebrow">Learners, schools, and teams</p>
              <h2>There’s a place for everyone.</h2>
            </div>
            <p>Three connected portals help learners practise and school teams support their progress.</p>
          </div>
          <div className="portal-grid">
            {portals.map(({ name, eyebrow, description, href, icon: Icon, className, action }) => (
              <article className={`portal-card ${className}`} key={name}>
                <div className="portal-card-top">
                  <span className="portal-icon"><Icon size={23} strokeWidth={1.9} aria-hidden="true" /></span>
                  <span className="portal-eyebrow">{eyebrow}</span>
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
                <ExternalLink className="portal-link" href={href}>{action}</ExternalLink>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-band">
          <div className="closing-inner page-width">
            <div>
              <p className="eyebrow">Ready, set, speak!</p>
              <h2>Your English adventure starts here.</h2>
            </div>
            <ExternalLink
              className="button button-dark"
              href="https://speech-improvement-ai.vercel.app/"
            >
              Enter the student portal
            </ExternalLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner page-width">
          <a className="brand footer-brand" href="#top" aria-label="Yimaru Academy home">
            <span className="brand-mark" aria-hidden="true">Y</span>
            <span className="brand-name">Yimaru <span>Academy</span></span>
          </a>
          <p>Make every word a little stronger.</p>
          <nav className="footer-links" aria-label="Portal links">
            <a href="https://speech-improvement-ai.vercel.app/" target="_blank" rel="noreferrer">Students</a>
            <a href="https://yimaru-admin.vercel.app/" target="_blank" rel="noreferrer">Admins</a>
            <a href="https://yimaru-principal.vercel.app/" target="_blank" rel="noreferrer">Principals</a>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default App

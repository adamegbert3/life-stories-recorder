// Check if browser supports speech to text
const speechSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;

/* DATA STORE */
const categories = {
    "Childhood": [
        "What was your favorite toy?",
        "Who was your best friend growing up?",
        "Where did you grow up?",
        "Who was your favorite teacher?",
        "Where did you go to school?",
        "Do you remember when your family got your first color TV?",
        "What games did you like to play as a child?",
        "What chores did you have as a kid?",
        "What was your favorite birthday party?",
        "What was your favorite family trip as a child?",
        "What was your childhood bedroom like?",
        "Did you ever have a pet? If so, what kind?",
        "What was your favorite childhood TV show or movie?",
        "What is your favorite childhood memory?",
        "What was your favorite food as a child?",
        "Did you ever go on vacation as a child? Where did you go?",
        "What’s a funny story from your early childhood?",
        "What did you remember about your grandparents?"
    ],
    "Teenage": [
        "What was your first job?",
        "What was your favorite subject in school?",
        "What was your first date?",
        "Who was your first love?",
        "What music did you like as a teenager?",
        "What were some of the fashions when you were in high school?",
        "Describe your teenage self in 3 words.",
        "What was dating like when you were a teenager?",
        "Who was your celebrity crush growing up?",
        "Tell me about when you learned to drive a car.",
        "What was your first car?",
        "What was your favorite high school memory?",
        "What sports or clubs did you join in school?",
        "Did you have a favorite hangout spot as a teen?",
        "Who was your best friend in high school?",
        "What was your high school mascot?",
        "What was prom like for you?",
        "What were your parents like?",
        "What was your teenage fashion style like?"
    ],
    "Adult": [
        "What is the most valuable lesson you learned?",
        "What is a memorable trip you took?",
        "What was your first home like?",
        "Describe the moment you proposed or were proposed to.",
        "How did you meet your spouse?",
        "What made you choose each of your children’s names?",
        "What was the best decision you have ever made?",
        "What is the best gift you’ve ever received?",
        "What has been your proudest accomplishment as an adult?",
        "What do you want people to remember about you?",
        "What’s one thing you wish you could go back and do differently?",
        "What hobbies or interests did you pick up as an adult?",
        "What’s the funniest thing that’s happened to you as an adult?",
        "What’s the hardest thing you’ve had to go through?",
        "Which decade of life has been your favorite?",
        "Do you have any regrets in life?"
    ],
    "General Questions": [
        "What are you thankful for?",
        "In your own opinion, what are you good at?",
        "Who is your greatest hero?",
        "What are you truly scared of?",
        "What is the best memory of a loved one?",
        "What is love?",
        "Who is someone in history you would like to meet?",
        "What three words describe your family?",
        "What is the best advice you’ve ever received?",
        "What is something you are most proud of?",
        "If you could live anywhere in the world, where would it be?",
        "What is one thing you want to be remembered for?",
        "What is your favorite holiday tradition?",
        "What makes you laugh every time?",
        "What is your favorite city you’ve visited?",
        "What’s one skill you wish you had?",
        "What’s a goal you are currently working on?",
        "What’s a world event you lived through that impacted you?",
        "Do you think money can buy happiness? Why or why not?"
    ],
    "Goals and Accomplishments": [
        "What did you want to be when you grew up?",
        "Who is one of your role models?",
        "What is something you are good at?",
        "What is your favorite hobby?",
        "What is your greatest accomplishment?",
        "What is something you’ve always dreamed of doing?",
        "What career goal have you achieved?",
        "What accomplishment surprised you the most?",
        "What is one challenge you are proud of overcoming?",
        "What award or recognition have you received?",
        "What is something you’re still working on improving?",
        "What is the best compliment you’ve ever received?",
        "What’s your proudest moment in school or work?",
        "What’s one bucket list item you’ve completed?",
        "What’s one future goal you’re excited about?",
        "If you could go back in time and choose a new career for yourself, would you? What would you choose?",
        "What have you always been good at?"
    ],
    "Heart and Soul": [
        "What makes you feel most alive?",
        "What has been an important event in your life?",
        "What is your favorite family tradition and why?",
        "What cheers you up when you are sad?",
        "Who is your best friend?",
        "What is your favorite hymn? Why?",
        "What do you love most about yourself?",
        "What makes you feel loved?",
        "What is something you can’t live without?",
        "What motivates you to keep going?",
        "What’s a lesson that changed your life?",
        "When do you feel closest to God?",
        "What’s a moment that took your breath away?",
        "What makes you laugh when you’re down?",
        "What makes you cry (in a good way)?",
        "Who is someone you miss?"
    ],
    "Fun and Entertaining": [
        "If you had a superpower, what would it be?",
        "What is your favorite food?",
        "If you were an animal, what would it be?",
        "What is your favorite holiday?",
        "What was your favorite vacation?",
        "What was your most embarrassing moment?",
        "If you had a million dollars, what would you do with it?",
        "What’s the funniest movie you’ve ever seen?",
        "What’s your guilty pleasure snack?",
        "What game do you always win at?",
        "What’s the best concert you’ve been to?",
        "What’s the funniest joke you know?",
        "What TV show could you watch over and over?",
        "If you could trade lives with someone for a day, who would it be?",
        "What’s the weirdest food you’ve ever tried?",
        "What’s the best prank you’ve pulled on someone?",
        "Have you ever done anything crazy?"
    ],
    "Ponder and Reflect": [
        "What is the nicest thing someone has done for you?",
        "What do you value about other people?",
        "What would you consider the happiest place on earth for you?",
        "What is your favorite book?",
        "What is your favorite childhood memory?",
        "When do you feel the most at peace?",
        "What is your greatest accomplishment?",
        "What is your biggest fear?",
        "What advice would you give to your younger self?",
        "What do you think the purpose of life is?",
        "Do you believe in fate?",
        "Do you believe people can change?",
        "What is the best life lesson you’ve learned so far?",
        "What’s something you hope for future generations?",
        "What’s the most meaningful compliment you’ve received?",
        "What’s the most important lesson you have learned during your life?",
        "Do you believe in love at first sight?"
    ],
    "Family Stories": [
        "What is a funny family memory?",
        "What is something difficult your family has overcome?",
        "What does your family enjoy doing together?",
        "What’s your favorite family holiday tradition?",
        "Who in your family makes you laugh the most?",
        "What’s the best meal your family cooks?",
        "Who is the storyteller in your family?",
        "What family heirloom means the most to you?",
        "What was your favorite family vacation?",
        "What is your favorite family photo?",
        "Who was the oldest relative you remember meeting?",
        "What games or activities does your family enjoy?",
        "What’s a family inside joke?",
        "What is something unique about your family?",
        "What role do you usually play in your family?",
        "Describe the personalities of each of your siblings."
    ],
    "Spiritual": [
        "What does faith mean to you?",
        "Share your testimony.",
        "What is your favorite scripture study?",
        "What is your favorite hymn?",
        "How has your faith in God helped you through a trial?",
        "How do you put God first in your life?",
        "Which latter-day prophet has impacted you the most?",
        "What is your favorite scripture story?",
        "When have you felt closest to God?",
        "What is your favorite General Conference talk?",
        "What spiritual lesson took you the longest to learn?",
        "What’s a spiritual goal you are working on?",
        "What’s the most powerful prayer experience you’ve had?",
        "What is your favorite temple experience?",
        "What makes you feel the Spirit the strongest?",
        "How do you feel about faith?"
    ],
    "Record with Friends": [
        "What is a funny memory you and a friend have together?",
        "How would you describe your friendship?",
        "What is something you would like to do together?",
        "Share a brief history of your friendship.",
        "Why are you friends?",
        "What’s the biggest adventure you’ve had with a friend?",
        "What’s the craziest thing you’ve done together?",
        "What’s your favorite inside joke with a friend?",
        "What’s the nicest thing a friend has done for you?",
        "What’s the longest friendship you’ve had?",
        "What’s your favorite memory from school with friends?",
        "How did you meet your best friend?",
        "What’s your favorite activity to do with friends?",
        "Have you ever gotten in trouble with a friend?",
        "What’s a tradition you and a friend had?",
        "Who is your current best friend?"
    ],
    "Early Life and Heritage": [
        "Where were you born?",
        "What do you know about your ancestry?",
        "What traditions were passed down in your family?",
        "What language did your ancestors speak?",
        "What country or countries are your ancestors from?",
        "What is a story about your grandparents?",
        "What is something unique about your heritage?",
        "What holidays or foods connect to your heritage?",
        "Who is the oldest relative you know of?",
        "What culture or values were passed down to you?",
        "What was your family’s first house like?",
        "What did your parents teach you about life?",
        "What is a song or saying passed down in your family?",
        "What did you learn from your grandparents?",
        "What do you hope to pass on to future generations?",
        "Where were you when 9/11 happened?"
    ],
    "Education and Growth": [
        "What was your favorite subject in school?",
        "Who was your favorite teacher and why?",
        "What was your hardest subject in school?",
        "Did you go to college? What was your major?",
        "What was your favorite class in college?",
        "What extracurricular activities did you join?",
        "What’s the most valuable lesson you learned in school?",
        "What book influenced you the most?",
        "Who inspired your education path?",
        "What did you learn outside of school that was important?",
        "What’s a funny school memory?",
        "What’s something you wish you had studied?",
        "What’s the most useful skill you learned in school?",
        "What was your graduation like?",
        "What teacher made the biggest difference in your life?"
    ],
    "Work and Accomplishments": [
        "What was your first job?",
        "What was your favorite job?",
        "What career did you end up in?",
        "What accomplishment at work are you most proud of?",
        "What’s the hardest job you ever had?",
        "What’s the funniest story from a job?",
        "What’s the best advice you got from a boss?",
        "What’s a mistake at work you learned from?",
        "What’s the longest job you held?",
        "What’s your favorite memory of coworkers?",
        "What’s the best project you ever worked on?",
        "What’s a skill you gained from work?",
        "What’s your proudest career moment?",
        "What’s one thing you wish you could redo at work?",
        "What was your retirement (or career change) like?"
    ],
    "Family and Relationships": [
        "How did you meet your spouse?",
        "What was your first date like?",
        "How did you propose or get proposed to?",
        "What is your favorite memory with your spouse?",
        "What was it like becoming a parent?",
        "What was the hardest part about parenting?",
        "What is your proudest parenting moment?",
        "What do you love most about your spouse?",
        "What made you choose each of your children’s names?",
        "What’s a funny parenting story?",
        "What do you admire about your parents?",
        "What’s something you learned from your siblings?",
        "What’s the best advice you got about relationships?",
        "What’s the secret to a strong marriage?",
        "What’s a tradition you started with your family?",
        "Who was your first love?"
    ],
    "Challenges and Resilience": [
        "What was the hardest thing you’ve had to go through?",
        "How did you overcome a difficult trial?",
        "What’s the most courageous thing you’ve done?",
        "What failure taught you the most?",
        "What illness or surgery have you gone through?",
        "What did you learn from losing someone you love?",
        "What challenge made you stronger?",
        "What’s the scariest thing you’ve faced?",
        "What’s a mistake that turned into a blessing?",
        "What’s an embarrassing moment that taught you something?",
        "What has helped you bounce back after loss?",
        "What spiritual strength helped you in hard times?",
        "What’s a lesson you learned from pain?",
        "What advice would you give to someone struggling?",
        "What’s a moment when you surprised yourself with strength?"
    ],
    "Wisdom and Reflection": [
        "What is the most important lesson you’ve learned?",
        "What is your best piece of advice for others?",
        "What’s one regret you have?",
        "What decision changed your life?",
        "What do you want people to remember about you?",
        "What is happiness to you?",
        "Do you think money can buy happiness? Why or why not?",
        "What’s the best era of your life?",
        "What’s your definition of success?",
        "What do you believe about love?",
        "Do you believe in love at first sight?",
        "What advice would you give to your children?",
        "What makes a life meaningful?",
        "What do you want your legacy to be?",
        "What do you think the world needs more of?",
        "If you could go back in time to any moment, what would it be?"
    ]
};

/* CONFIGURATION: Control which categories are free here */
const freeCategories = [
    "General Questions"
];

// Simple flag to simulate if user has bought the pack (set to true to test unlocking)
let isPremiumUser = false;

/* STATE MANAGEMENT */
let currentCategory = null;
let currentQuestion = null;
let mediaRecorder;
let audioChunks = [];
let audioBlob = null;
let audioUrl = null;
let finalTranscript = "";

// Load saved data
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let speakerName = localStorage.getItem('speakerName') || "";

const app = document.getElementById('app');

/* LEGAL MODAL LOGIC */
const legalContent = {
    privacy: `
        <h2>Privacy Policy</h2>
        <p><strong>Your Data Stays With You.</strong></p>
        <p>This app operates "locally." When you record a story, the audio is processed right here on your device. We do not upload your recordings to a server.</p>
        <p><strong>Speech Recognition:</strong> If you use the transcript feature, your browser (Chrome, Safari, etc.) handles the text conversion. This data is processed according to your browser's privacy standards.</p>
        <p><strong>Cookies/Storage:</strong> We use your browser's local storage to remember your "Favorites" and the Speaker Name.</p>
        <p>Contact: egb25002@byui.edu</p>
    `,
    terms: `
        <h2>Terms of Service</h2>
        <p><strong>Use at your own risk.</strong></p>
        <p>Please download and save your stories immediately after recording. Because this app does not store data in the cloud, if you clear your browser cache or lose your phone, undownloaded recordings cannot be recovered by us.</p>
        <p>You own all rights to the stories you record.</p>
    `,
    feedback: `
        <h2>Feature Request</h2>
        <p style="font-size:16px;">Thank you so much for using the Life Stories Recorder!</p>
        <p>We are always trying to improve. If you have an idea or found a bug, please email us at:</p>
        <p><strong><a href="mailto:egb25002@byui.edu" style="color:#2E5C38;">egb25002@byui.edu</a></strong></p>
        <br>
        <p style="font-size:12px; color:#999;">(Click the email to open your mail app)</p>
    `
};

function showLegal(type) {
    const modal = document.getElementById('helpModal');
    const contentBox = modal.querySelector('.modal-content');
    
    // Save the original Help HTML so we can restore it later
    if (!window.originalHelpHtml) {
        window.originalHelpHtml = contentBox.innerHTML;
    }

    // Inject Legal Text
    contentBox.innerHTML = `
        <div style="text-align:left; max-height:60vh; overflow-y:auto;">
            ${legalContent[type]}
        </div>
        <br>
        <button class="btn btn-category" onclick="restoreHelp()">Close</button>
    `;
    
    modal.style.display = 'flex';
}

function restoreHelp() {
    const modal = document.getElementById('helpModal');
    // Restore the original "How to" content
    if (window.originalHelpHtml) {
        modal.querySelector('.modal-content').innerHTML = window.originalHelpHtml;
    }
    modal.style.display = 'none';
}

/* --- RENDER FUNCTIONS --- */

function renderHome() {
    let html = `
        <div class="logo-area">
            <img src="LSR_light.png" class="logo-img" alt="Life Stories Recorder">
            <h1>Life Stories Recorder</h1>
        </div>
        ${!speechSupported ? `
        <div style="background:#FFF4E5; color:#663C00; padding:10px; font-size:13px; border-radius:8px; text-align:center; margin-bottom:20px; border:1px solid #FFCC00;">
            <strong>Tip:</strong> Open this in <b>Google Chrome</b> to use the automatic Speech-to-Text feature.
        </div>
        ` : ''}
        <div class="speaker-input">
            <label>Who is speaking?</label>
            <input type="text" id="speakerField" value="${speakerName}" 
                   placeholder="e.g. Grandma, Dad..." oninput="saveSpeaker(this.value)">
        </div>

        <div class="search-container">
            <svg class="search-icon-svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input type="text" id="searchBar" placeholder="Search questions..." onkeyup="handleSearch(this.value)">
        </div>

        <div id="categoryList">
            ${favorites.length > 0 ? `<button class="btn btn-favorite" onclick="renderFavorites()">
                <svg class="btn-icon-svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                Your Favorites (${favorites.length})
            </button>` : ''}

            <button class="btn btn-special" onclick="renderCustomInput()">
                <svg class="btn-icon-svg" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                Write Your Own
            </button>
            
            <div class="divider">TOPICS</div>
    `;

    Object.keys(categories).sort().forEach(cat => {
        const isLocked = !freeCategories.includes(cat) && !isPremiumUser;

        if (isLocked) {
            html += `
            <button class="btn btn-category btn-locked" onclick="promptPayment('${cat}')">
                <span>${cat}</span>
                <svg class="lock-icon-svg" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
            </button>`;
        } else {
            html += `<button class="btn btn-category" onclick="selectCategory('${cat}')">${cat}</button>`;
        }
    });

    html += `</div>`;
    app.innerHTML = html;
}

// Add these helper functions to the bottom of your script
function promptPayment(categoryName) {
    // This is where you would hook up Stripe, PayPal, or a payment modal
    alert(`The "${categoryName}" category is part of the Premium Pack.\n\nPlease upgrade to access this and all other locked stories!`);
}

// function unlockAll() {
//     // Simulate a purchase for now
//     if(confirm("Would you like to purchase the Full Version for $4.99? (Demo)")) {
//         isPremiumUser = true;
//         renderHome(); // Re-render to show unlocked state
//         alert("Thank you! All categories are now available.");
//     }
// }

function renderFavorites() {
    let html = `<button class="btn btn-back" onclick="goBack()">← Back to Home</button>`;
    html += `<h1>Favorites</h1>`;
    
    if (favorites.length === 0) {
        html += `<p style="text-align:center; color:#888;">No favorites yet. Click the heart icon next to a question to add one!</p>`;
    } else {
        favorites.forEach(q => {
            html += createQuestionButton(q);
        });
    }
    app.innerHTML = html;
}

function renderQuestions(category) {
    let html = `<button class="btn btn-back" onclick="goBack()">← Back to Categories</button>`;
    html += `<h1>${category}</h1>`;
    
    if(categories[category]) {
        categories[category].forEach(q => {
            html += createQuestionButton(q);
        });
    }
    app.innerHTML = html;
}

// Helper to create the question button with the Heart Icon
function createQuestionButton(q) {
    const isFav = favorites.includes(q);
    const heartClass = isFav ? "heart-active" : "heart-inactive";
    const safeQ = q.replace(/'/g, "\\'"); 

    return `
    <div class="question-row">
        <button class="btn btn-question" onclick="selectQuestion('${safeQ}')">${q}</button>
        <button class="btn-heart ${heartClass}" onclick="toggleFavorite('${safeQ}')">
            <svg class="heart-svg" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </button>
    </div>
    `;
}

function renderCustomInput() {
    app.innerHTML = `
        <button class="btn btn-back" onclick="goBack()">← Back</button>
        <h1>Custom Story</h1>
        <div class="input-group">
            <input type="text" id="customQ" placeholder="What's the story?" autocomplete="off">
            <button class="btn btn-start-custom" onclick="startCustomQuestion()">Start Recording</button>
        </div>
    `;
}

function renderRecorder() {
    // Dynamic Label Logic
    const boxTitle = speechSupported ? "Live Transcript" : "Personal Notes";
    const boxPlaceholder = speechSupported 
        ? "<i>Listening... (Text will appear here if using anything other than Safari. Safari doesn't support Speech Recognition.)</i>" 
        : "<i>Transcription not available in this browser. You can type notes here after recording.</i>";

    app.innerHTML = `
        <button class="btn btn-back" onclick="goBack()">← Back</button>
        <div class="recorder-view">
            <div class="question-title">${currentQuestion}</div>
            
            <div style="text-align:left; font-weight:bold; margin-bottom:5px; color:#2E5C38;">${boxTitle}:</div>
            <div class="transcript-container">
                <div id="transcriptText">
                    ${boxPlaceholder}
                </div>
            </div>

            <button id="recordBtn" class="record-btn start-record" onclick="toggleRecording()">
                <svg class="mic-svg" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
            </button>
            <div id="statusText" style="margin-top:20px; color:#999; text-transform:uppercase; font-size:12px; font-weight:bold;">Tap to Record</div>
        </div>
    `;
}

function renderReview() {
    const boxTitle = speechSupported ? "Edit Transcript" : "Add Notes";

    app.innerHTML = `
        <div class="recorder-view">
            <h2>Review Story</h2>
            <p style="color:#666; font-style:italic; margin-bottom:20px;">${currentQuestion}</p>
            
            <audio controls src="${audioUrl}" style="width:100%; height:40px; margin-bottom:20px;"></audio>

            <div class="review-actions">
                <button class="btn btn-save" onclick="saveAll()">
                    <svg style="width:20px; height:20px; fill:white;" viewBox="0 0 24 24"><path d="M19 12v7H5v-8.15l-1-1V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-3zm-9 2h6v-6h3L15 4l-4 4h3v6z"/></svg>
                    Save Story
                </button>
                <button class="btn btn-discard" onclick="renderRecorder()">
                    Discard
                </button>
            </div>
            
            <h3 style="text-align:left; margin-top:0;">${boxTitle}:</h3>
            <textarea id="finalTranscriptBox" style="width:100%; height:100px; padding:10px; border:2px solid #E5E0D8; border-radius:12px; font-family:inherit; box-sizing:border-box;">${finalTranscript}</textarea>
        </div>
    `;
}

/* HELP MODAL LOGIC */
function openHelp() {
    document.getElementById('helpModal').style.display = 'flex';
}

function closeHelp() {
    document.getElementById('helpModal').style.display = 'none';
    // Remember that the user has seen the tutorial
    localStorage.setItem('hasSeenTutorial', 'true');
}

// Check on load if we need to show the tutorial
window.addEventListener('DOMContentLoaded', () => {
    const hasSeen = localStorage.getItem('hasSeenTutorial');
    if (!hasSeen) {
        openHelp();
    }
});

/* --- LOGIC --- */

// 1. SAVE SPEAKER NAME
window.saveSpeaker = (val) => {
    speakerName = val;
    localStorage.setItem('speakerName', val);
}

// 2. SEARCH FUNCTION
window.handleSearch = (query) => {
    const list = document.getElementById('categoryList');
    if (!query) {
        renderHome(); // Reset if empty
        return;
    }
    
    // Flatten all questions into one list
    let allQuestions = [];
    Object.values(categories).forEach(arr => allQuestions = [...allQuestions, ...arr]);
    
    // Filter
    const matches = allQuestions.filter(q => q.toLowerCase().includes(query.toLowerCase()));
    
    let html = `<div class="divider">SEARCH RESULTS</div>`;
    matches.forEach(q => {
        html += createQuestionButton(q);
    });
    
    if(matches.length === 0) html += `<p style="text-align:center">No questions found.</p>`;
    
    list.innerHTML = html;
}

// 3. FAVORITES LOGIC
window.toggleFavorite = (q) => {
    if (favorites.includes(q)) {
        favorites = favorites.filter(item => item !== q);
    } else {
        favorites.push(q);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Refresh the view to show the new heart state
    if (currentCategory) {
        renderQuestions(currentCategory);
    } else if (document.getElementById('searchBar') && document.getElementById('searchBar').value) {
         handleSearch(document.getElementById('searchBar').value);
    } else {
        renderHome();
    }
}

// NAVIGATION
window.selectCategory = (cat) => {
    currentCategory = cat;
    renderQuestions(cat);
};

window.selectQuestion = (q) => {
    currentQuestion = q;
    renderRecorder();
};

window.startCustomQuestion = () => {
    const val = document.getElementById('customQ').value;
    if(val) selectQuestion(val);
}

window.goBack = () => {
    currentQuestion = null;
    currentCategory = null;
    renderHome();
};

/* --- SAFARI-OPTIMIZED RECORDING --- */
let recognition;
let isRecognizing = false; // Track state manually

// Initialize once
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false; // CRITICAL FOR SAFARI
    recognition.interimResults = true;
    recognition.lang = 'en-US';
}

window.toggleRecording = async () => {
    const btn = document.getElementById('recordBtn');
    const status = document.getElementById('statusText');
    const transcriptBox = document.getElementById('transcriptText');

    if (!mediaRecorder || mediaRecorder.state === "inactive") {
        // --- START RECORDING ---
        
        // 1. Start Speech Recognition FIRST (Synchronously)
        if (recognition) {
            finalTranscript = ""; 
            transcriptBox.innerHTML = "<i>Listening...</i>";
            
            recognition.onresult = (event) => {
                let interim = "";
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript + " ";
                    } else {
                        interim += event.results[i][0].transcript;
                    }
                }
                transcriptBox.innerHTML = `<b>${finalTranscript}</b><span style="color:#888">${interim}</span>`;
            };

            // AUTO-RESTART LOOP (The "Continuous" Hack)
            recognition.onend = () => {
                isRecognizing = false;
                // Only restart if the MediaRecorder is still running
                if (mediaRecorder && mediaRecorder.state === "recording") {
                    try { 
                        recognition.start(); 
                        isRecognizing = true;
                    } catch(e) { console.log("Restart ignore"); }
                }
            };

            // Start it
            try {
                recognition.start();
                isRecognizing = true;
            } catch (err) {
                console.warn("Recognition start failed:", err);
                // Even if this fails, we continue to audio recording
            }
        }

        // 2. Wait 200ms before grabbing Microphone for Audio (Prevents collision)
        await new Promise(r => setTimeout(r, 200));

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];

            mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
            
            mediaRecorder.onstop = () => {
                const type = MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : 'audio/webm';
                audioBlob = new Blob(audioChunks, { type: type });
                audioUrl = URL.createObjectURL(audioBlob);
                
                // FORCE KILL RECOGNITION
                if (recognition) {
                    recognition.onend = null; // Remove the restart loop
                    recognition.stop();
                    isRecognizing = false;
                }
                renderReview();
            };

            mediaRecorder.start();

            // --- UI UPDATES (THIS IS THE FIX) ---
            btn.classList.remove('start-record');
            btn.classList.add('stop-record');
            
            // This line now injects the Square Stop SVG instead of the old code
            btn.innerHTML = '<svg class="stop-svg" viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg>';
            
            status.innerText = "Recording...";

        } catch (err) {
            alert("Microphone Error: " + err.message);
            if(recognition) recognition.stop();
        }

    } else {
        // --- STOP RECORDING ---
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
};

/* --- SAVING FILES --- */
window.saveAll = () => {
    // 1. Generate Filename Base
    // e.g., "Grandma_First_Job"
    const safeName = (speakerName + " " + currentQuestion).replace(/[^a-z0-9]/gi, '_').toLowerCase();

    // 2. Download Audio
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = `${safeName}.m4a`; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // 3. Download Text (Transcript/Notes)
    // We get the content from the box the user might have edited
    const finalTx = document.getElementById('finalTranscriptBox').value;
    
    // Only download text if there is actually text to save
    if (finalTx.trim().length > 0) {
        setTimeout(() => {
            const tBlob = new Blob([`Question: ${currentQuestion}\nSpeaker: ${speakerName}\nDate: ${new Date().toLocaleDateString()}\n\n-- NOTES/TRANSCRIPT --\n${finalTx}`], {type: 'text/plain'});
            const tUrl = URL.createObjectURL(tBlob);
            const tA = document.createElement('a');
            tA.href = tUrl;
            tA.download = `${safeName}.txt`;
            document.body.appendChild(tA);
            tA.click();
            document.body.removeChild(tA);
        }, 100); // 100ms delay helps browsers accept the second download
    }

    alert("Story Saved!");
    goBack();
}

// Init
renderHome();
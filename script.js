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

/* APPLICATION STATE */
let currentCategory = null;
let currentQuestion = null;
let mediaRecorder;
let audioChunks = [];

const app = document.getElementById('app');

/* RENDER FUNCTIONS */

function renderHome() {
    let html = `<h1>Life Stories Recorder</h1>`;
    // Sort keys alphabetically
    Object.keys(categories).sort().forEach(cat => {
        html += `<button class="btn btn-category" onclick="selectCategory('${cat}')">${cat}</button>`;
    });
    app.innerHTML = html;
}

function renderQuestions() {
    let html = `<button class="btn btn-back" onclick="goBack()">← Back to Categories</button>`;
    html += `<h1>${currentCategory}</h1>`;
    
    categories[currentCategory].forEach(q => {
        // Use encodeURIComponent for safety, then replace single quotes specifically
        const safeQ = q.replace(/'/g, "\\'");
        html += `<button class="btn btn-question" onclick="selectQuestion('${safeQ}')">${q}</button>`;
    });
    app.innerHTML = html;
}

function renderRecorder() {
    app.innerHTML = `
        <button class="btn btn-back" onclick="goBack()">← Back to Questions</button>
        <div class="recorder-view">
            <div class="question-title">${currentQuestion}</div>
            <button id="recordBtn" class="record-btn start-record" onclick="toggleRecording()">
                Start
            </button>
            <div id="statusText" class="status-text">Tap to Record</div>
        </div>
    `;
}

/* NAVIGATION LOGIC */
window.selectCategory = (cat) => {
    currentCategory = cat;
    renderQuestions();
};

window.selectQuestion = (q) => {
    currentQuestion = q;
    renderRecorder();
};

window.goBack = () => {
    if (currentQuestion) {
        currentQuestion = null;
        renderQuestions();
    } else {
        currentCategory = null;
        renderHome();
    }
};

/* AUDIO LOGIC */
window.toggleRecording = async () => {
    const btn = document.getElementById('recordBtn');
    const status = document.getElementById('statusText');

    if (!mediaRecorder || mediaRecorder.state === "inactive") {
        // START RECORDING
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];

            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                
                // Auto-download logic
                const a = document.createElement('a');
                a.href = audioUrl;
                // Clean filename: remove special chars, replace spaces with underscores
                const safeName = currentQuestion.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                a.download = `${safeName}.webm`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                status.innerText = "Recording Saved to Downloads!";
            };

            mediaRecorder.start();
            btn.className = "record-btn stop-record";
            btn.innerText = "Stop";
            status.innerText = "Recording...";
        } catch (err) {
            console.error(err);
            alert("Microphone access denied. Please allow microphone permissions in your browser settings.");
        }
    } else {
        // STOP RECORDING
        mediaRecorder.stop();
        btn.className = "record-btn start-record";
        btn.innerText = "Start";
        
        // Turn off mic
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
};

// Initialize App
renderHome();
const JobsContainer = document.getElementById("jobs-container");
const hiddenContainer = document.getElementById("hidden-container");

let allJobs = [
    { id: 1, name: "Mobile First Corp", post: "React Native Developer", place: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "all" },
    { id: 2, name: "WebFlow Agency", post: "Web Designer & Developer", place: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "all" },
    { id: 3, name: "DataViz Solutions", post: "Data Visualization Specialist", place: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "all" },
    { id: 4, name: "CloudFirst Inc", post: "Backend Developer", place: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "all" },
    { id: 5, name: "Innovation Labs", post: "UI/UX Engineer", place: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "all" },
    { id: 6, name: "MegaCorp Solutions", post: "JavaScript Developer", place: "New York, NY", type: "Full-time", salary: "$130,000 - $170,00", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "all" },
    { id: 7, name: "StartupXYZ", post: "Full Stack Engineer", place: "Remote", type: "Full-time", salary: "$120,000 - $160,000", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "all" },
    { id: 8, name: "TechCorp Industries", post: "Senior Frontend Developer", place: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: "all" },
];

let currentType = 'all';

function toggleBtn(btnType, element) {
    currentType = btnType;

    const buttons = document.querySelectorAll('.type-btn');

    // shob button reset koro
    buttons.forEach(button => {
        // button a click korle button er class change hobe 
        button.classList.remove('btn-active');
        button.classList.add('btn-nonActive');
    })

    // emni te click korle je class apply hobe 
    element.classList.remove('btn-nonActive');
    element.classList.add('btn-active');

    renderJobs();
}


function renderJobs() {
    // initaially inner html empty
    JobsContainer.innerHTML = "";

    let selectedJob;
    // job filter korte hobe 
    if (currentType === "all") {
        selectedJob = currentType;
    }
    // jodi all na hoy 
    selectedJob = allJobs.filter(job => job.status == currentType);

    // je button a click kora hobe sheita hobe current type 
    // console.log(currentType);

    if (selectedJob.length === 0) {
        hiddenContainer.classList.remove('hidden');
    }
    hiddenContainer.classList.add('hidden');

    // selected job er moddhe job jemn hobe 
    for (let job of selectedJob) {
        const jobCard = document.createElement('div');
        jobCard.className = "space-y-5 p-6 shadow bg-white mb-[16px]";
        jobCard.innerHTML = `
                    <div class="flex justify-between items-center">
                        <div class="space-y-1">
                            <h4 class="text-[18px] font-semibold">${job.name}</h4>
                            <p class="text-[#64748B] text-[16px]">${job.post}</p>
                        </div>
                        <button
                            class="text-[#64748B] bg-white rounded-full btn btn-soft shadow p-2.5 border border-[#64748B]/30"><i
                                class="fa-regular fa-trash-can"></i></button>
                    </div>

                    <div class="text-[14px] text-[#64748B] space-x-2">
                        <span>${job.place}</span> • <span class="ml-2">${job.type}</span> • <span class="ml-2">${job.salary}</span>
                    </div>

                    <div class="space-y-2">

                        ${job.status === 'all' ? `<div class="py-2 px-3 bg-[#EEF4FF] inline-block uppercase">not applied</div>` : job.status === 'interview' ? `<div class="border-green-500 text-green-500 bg-green-200 uppercase">interview</div>` : `<div class="border-red-500 text-red-500 bg-red-200 uppercase">rejected</div>`}

                        <P class="text-[14px] text-[#323B49]">${job.description}</P>
                    </div>

                    <div class="flex justify-start items-center gap-2">
                        <button onclick="updateStatus(${job.id})" class="btn btn-outline btn-success">INTERVIEW</button>
                        <button onclick="updateStatus(${job.id})" class="btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>`;

        JobsContainer.appendChild(jobCard);
    }

};

// 
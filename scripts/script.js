let allJobs = [
    {id: 1, name:"Mobile First Corp", post:"React Native Developer", place:"Remote", type:"Full-time", salary:"$130,000 - $175,000" , description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "all"},
    {id: 2, name:"WebFlow Agency", post:"Web Designer & Developer", place:"Los Angeles, CA", type:"Part-time", salary:"$80,000 - $120,000" , description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "all"},
    {id: 3, name:"DataViz Solutions", post:"Data Visualization Specialist", place:"Boston, MA", type:"Full-time", salary:"$125,000 - $165,000" , description:"Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "all"},
    {id: 4, name:"CloudFirst Inc", post:"Backend Developer", place:"Seattle, WA", type:"Full-time", salary:"$140,000 - $190,000" , description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "all"},
    {id: 5, name:"Innovation Labs", post:"UI/UX Engineer", place:"Austin, TX", type:"Full-time", salary:"$110,000 - $150,000" , description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "all"},
    {id: 6, name:"MegaCorp Solutions", post:"JavaScript Developer", place:"New York, NY", type:"Full-time", salary:"$130,000 - $170,00" , description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "all"},
    {id: 7, name:"StartupXYZ", post:"Full Stack Engineer", place:"Remote", type:"Full-time", salary:"$120,000 - $160,000" , description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "all"},
    {id: 8, name:"TechCorp Industries", post:"Senior Frontend Developer", place:"San Francisco, CA", type:"Full-time", salary:"$130,000 - $175,000" , description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: "all"},
];

let currentType = 'all';

function toggleBtn(btnType, element){
    currentType = btnType;

    const buttons = document.querySelectorAll('.type-btn');

    // shob button reset koro
    buttons.forEach(button =>{
        // button a click korle button er class change hobe 
        button.classList.remove('btn-active');
        button.classList.add('btn-nonActive');
    })

    // emni te click korle je class apply hobe 
    element.classList.remove('btn-nonActive');
    element.classList.add('btn-active');
}
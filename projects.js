//----- Slider
(function(){

var IMAGE_FOLDER = 'images/';
var PROJECTS = [
        {
            name:        'Competa Millman',
            description: 'Developing the front-end for Competa Millman website using the above technologies along with preprocessors like \
                          SASS and task runner GulpJs to automate tasks. The project was completed with several scrum teams working on \
                          assigned user-stories. Responsible for the scrum master role in the team. Performed cross browser testing along \
                          with validation of functionality. Developed several functionality based on the user-stories picked up.',
            skills:      'HTML5, CSS3, Vanilla Javascript, SASS, Gulp',
            img:          IMAGE_FOLDER + 'competamillman.jpg'
        },{
            name:        'FTSF',
            description: 'Developing the front-end for Fair Trade Software Foundation website using the below technologies \
                          along with preprocessors like SASS and task runner GulpJs to automate tasks. \
                          The team follows the Agile/Scrum methodology to complete their tasks and uses Git to manage the project repository.',
            skills:      'HTML, CSS, Javascript, SASS, Gulp',
            img:          IMAGE_FOLDER + 'ftsf.jpg'
        },{
            name:        'IVY - An Intelligent gardening assistant',
            description: 'Developed and designed UI changes to incorporate in WebApp. \
                          Developed a landing website using Bootstrap 3 for desktop and mobile responsiveness. \
                          Experimenting with the possibilities of using NodeJS for the WebApp in the future.\
                          Responsible for building iOS app using UIWebview for Ivy (A voice controlled gardening assistant) \
                          Integrated Nuance’s and IBM’s Speech Recognition and Text-to-Speech API in the native application for Ivy. \
                          Learning AI’s Web Ontology to derive inferences of big data. Exposure to SCM tool Git.',
            skills:      'HTML5, CSS3, Javascript ES5, Bootstrap 3, Swift 2 & 3',
            img:          IMAGE_FOLDER + 'ivy.jpg'
        },{
            name:        'Duke Energy',
            description: 'Lead and prioritize the offshore production support team’s workload. Analyze the potential areas for Service \
                          improvement and raise proposals with the Manager. Manage and own the Problem Management Process.\
                          Coordinate the effective functioning of Problem management activities across all support teams. Contribute to the \
                          planning of application/infrastructure releases and configuration changes. Ensure there are robust procedures and \
                          processes within the application support function tasks. Application development, enhancement and maintenance \
                          of the Customer Management System. Gather and estimate business requirements and translate to technical \
                          solutions. Preparation of TS (Technical Specifications) based on the existing functionality and requirements. \
                          Performed unit testing and system integration testing. Created automated solutions for recurring tasks in turn \
                          reducing efforts. Critical contact for the Ordering system in CMS (Customer Management System). Involved in \
                          extensive analysis on critical production outages. Perform disaster recovery exercises for the Billing system. \
                          Conduct Root cause analysis to identify and fix recurring errors, improving the overall stability of the system.\
                          Update user database to change existing services according to billing history of user. Monitor mainframe batch \
                          cycle for critical daily jobs using scheduler tools. Perform emergency code migration and retrofitting from test \
                          region to production. Work on IT audit data gathering requests and deliver it as per auditor’s satisfaction. \
                          Interact with internal teams and external 3rd party vendors to troubleshoot and resolve complex problems.\
                          Create and maintain documents for supported applications. Backup lead for the DB2 version upgrade exercise in \
                          the absence of IT development lead. Create business reports based on customer data.',
            skills:      'COBOL, DB2 & JCL',
            img:         IMAGE_FOLDER + 'duke.jpg',
            github:      'https://github.com/selvinafernandes/SASS',
            link:        'https://google.com'
        }, {
            name:        'Dupont Chemicals',
            description: 'Creation and appropriate assignment of support incidents on BMC Remedy. Document any ongoing and closed \
                          issues related to the application. Interact with clients for information gathering on new requests. Execution of \
                          scripts on UNIX based application for reports generation.',
            skills:      'COBOL, JCL, DB2 & Unix',
            img:          IMAGE_FOLDER + 'dupont.jpg'
           
        }, {
            name:        'Scottish Power',
            description: 'Handle Customer issues related to billing system. Conduct enhancements/changes to the billing system.\
                          Co-ordinate resolutions & workarounds for major incidents including escalations. Identify areas of improvement by, \
                          conducting root cause analysis of the errors. Manual billing of accounts in cases of errors during automated billing, \
                          cycles. Maintain User Accounts. Perform archiving activities in UNIX. Create documents for the project application. , \
                          Running jobs for regular fixes involving database updates.',
            skills:      'COBOL, JCL & DB2',
            img:          IMAGE_FOLDER + 'scottishpower.jpg'
           
        }
]; 
var currentProject = 0;
var getProjects = document.querySelectorAll('.projects__grid__list--item');
var getArrows = document.getElementsByClassName('arrow');
const projectWidth = 280;

document.getElementById('sidebar-left').addEventListener("click", moveLeft);
document.getElementById('sidebar-right').addEventListener("click", moveRight);

window.onload = function(){
    loadProjects();
}

function loadProjects() {  

    var loadProjects = document.querySelectorAll('.projects__grid__list--item');
    
    for (var i=0; i < loadProjects.length;i++){
        (function(index){
            loadProjects[i].addEventListener("click",function(){
            getModal(index);

            });
        })(i);
    }
    addTitle();
    render(0, 0);
}

function modules(input, operator) {
    var tmp = input % operator;
    if(tmp < 0) {
        tmp += operator;
    }
    return tmp;
}

function moveLeft(){
        var oldCurrentProject = currentProject;
        currentProject = currentProject + projectWidth;
        render(oldCurrentProject, currentProject);
}

function moveRight(){
        var oldCurrentProject = currentProject;
        currentProject = currentProject - projectWidth;
        render(oldCurrentProject, currentProject);
}

function render(oldCurrentProject, currentProject) {

    var projectsWidth = getProjects.length * projectWidth;
    for (var i = 0; i < getProjects.length; i++){
            var projectOffset = i * projectWidth;
            var left = modules(projectOffset + currentProject, projectsWidth);
            var oldLeft = modules(projectOffset + oldCurrentProject, projectsWidth);
            getProjects[i].style.left = left - projectWidth + 'px';
            getProjects[i].style.transition = Math.abs(left - oldLeft) === projectWidth ? '1s' : '0s';
    }
}

// --- Popup logic

function getModal(index){

    var projectName = document.querySelector('.projects__name');
    var projectSkills = document.querySelector('.projects__tech');
    var projectImage = document.querySelector('.projects__image');
    var projectDesc = document.querySelector('.projects__desc--para');

    var toggleModal = document.getElementById('popup');
    toggleModal.classList.remove('hidden');

    projectName.innerHTML = PROJECTS[index].name;
    projectSkills.innerHTML = PROJECTS[index].skills;
    projectDesc.innerHTML = PROJECTS[index].description;
    projectImage.src = PROJECTS[index].img;

    var close = document.getElementById('close');
    close.addEventListener('click',function(){
    toggleModal.classList.add('hidden');
    })
}


// ----Scroll logic
    
    for (var i = 0; i < getArrows.length; i++){
        getArrows[i].addEventListener("click",function(evt){
            evt.preventDefault();
            scrollToBlock(this);
        });
    }

    function scrollToBlock(x){
        var SCROLL_SPEED = 5;
        var scrollDistance = window.innerHeight;
        var scrollPosition = 0 ;
        var i = window.scrollY ? window.scrollY : document.documentElement.scrollTop;

        var distance = i + scrollDistance;
        if (x.classList.contains('down')){
            var scrollToBottom = window.setInterval(function() {
                i = i + SCROLL_SPEED;
                if(i < distance) {
                    window.scrollTo(0,i);
                }else{
                    window.clearInterval(scrollToBottom);
                }
            },1);
        } else if(x.classList.contains('up')) {
             var scrollToTop = window.setInterval(function() {
                i = i - SCROLL_SPEED;
                if(i > scrollDistance) {
                    window.scrollTo(0,i);
                }else{
                    window.clearInterval(scrollToTop);
                }
        },1);
    }
}

function addTitle(){

    var getProjectTitle = document.querySelectorAll('.item--title');
    for(var i = 0; i < PROJECTS.length; i++){
        getProjectTitle[i].innerHTML = PROJECTS[i].name;
        getProjects[i].style.backgroundImage = 'url('+PROJECTS[i].img+')';
    }
}
})();




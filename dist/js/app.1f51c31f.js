(function(){"use strict";var e={7573:function(e,t,o){var i=o(3396);const n={id:"app"};function s(e,t,o,s,l,r){const a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(a)])}var l={name:"App"},r=o(89);const a=(0,r.Z)(l,[["render",s]]);var d=a,c=(o(7658),o(65));const m={state:{comments:[]},mutations:{addComment(e,{file:t,lineNumber:o,author:i,text:n}){const s={file:t,lineNumber:o,author:i,text:n};e.comments.push(s)}}};o(4730);const p=()=>"_"+Math.random().toString(36).substr(2,9);function u(e){const t=[],o=[];function i(e,t){return e.name<t.name?-1:e.name>t.name?1:0}e.children&&Array.isArray(e.children)&&e.children.forEach((e=>{"folder"===e.type?t.push(e):"text/plain"===e.type?o.push(e):console.log(`ERROR: unknown type ${e.type}`)})),t.sort(i),o.sort(i);const n=[...t,...o];return n}const h=(0,c.MT)({modules:{comment:m},state:{repositories:[],newRepository:"",newRepositoryName:"",newFile:"",selectedRepository:null,expandedFolder:null,selectedFile:null,selectedFileContent:"",textarea:"",comments:[]},mutations:{createRepository(e,t){const o={id:p(),name:t||"New Repository",files:[],level:0,children:[],type:"folder"};e.repositories.push(o)},createFolderInRepository(e,t){if(e.selectedRepository){p()}},createFileInRepository(e,t){if(e.selectedRepository){const o=""!==t.trim()?t:"NewFile.txt",i=(new Date).getTime(),n={id:p(),name:o,type:"text/plain",content:"",lastModified:i};e.newFile=n,e.selectedRepository.files.push(n),e.selectedFile=n}},setSelectedFolder(e,t){e.expandedFolder=t,console.log("folder store:",t),t&&"folder"===t.type&&null!==t.children&&(Array.isArray(t.children)?t.children=u(t):console.log("ERROR: folder.files is not an array"))},selectRepository(e,t){e.selectedRepository=t},setSelectedFile(e,t){e.selectedFile=t},updateFileContent(e,t){if(e.selectedRepository&&e.selectedFile){const o=e.selectedRepository,i=o.files.findIndex((t=>t.lastModified===e.selectedFile.lastModified));-1!==i&&(o.files[i].content=t,e.textarea=t)}},renameItem(e,t){if(e.selectedFile===t){const o=e.selectedRepository,i=o.files.findIndex((t=>t.lastModified===e.selectedFile.lastModified));-1!==i&&(o.files[i].name=t.name)}},setRepositoryContent(e,{repository:t,content:o}){t.files=o},addComment(e,{file:t,lineNumber:o,author:i,text:n}){const s={file:t,lineNumber:o,author:i,text:n};e.comments.push(s)},deleteFile(e){if(console.log("start:"),console.log("selectedRepository:",e.selectedRepository),e.selectedRepository&&e.selectedFile||e.expandedFolder){console.log("state.selectedFile:",e.selectedFile);const t=e.selectedRepository;console.log("repository:",t);const o=t=>{console.log("enter to remove file:",t),Array.isArray(t)?(console.log("entity is array:",t),t.forEach(((i,n)=>{"folder"===i.type?i===e.expandedFolder?(console.log("child === state.expandedFolder",t),t.splice(n,1)):o(i.children):"text/plain"===i.type&&i===e.selectedFile?t.splice(n,1):console.log(`ERROR: Unknown type ${i.type}`)}))):console.log("ERROR: entity is not an array")};o(t.children)}}},actions:{createRepository({commit:e,state:t},o){e("createRepository",o)},createFolderInRepository({commit:e,state:t},o){e("createFolderInRepository",o)},createFileInRepository({commit:e,state:t},o){e("createFileInRepository",o)},selectRepository({commit:e},t){e("selectRepository",t)},setSelectedFile({commit:e},t){e("setSelectedFile",t)},setSelectedFolder({commit:e},t){e("setSelectedFolder",t)},updateFileContent({commit:e},t){e("updateFileContent",t)},renameItem({commit:e},{originalItem:t,updatedItem:o}){e("renameItem",{originalItem:t,updatedItem:o})}},getters:{selectedFile:e=>e.selectedFile}});var y=h,f=o(6609),w=o(2483),g=o(7139);const F=e=>((0,i.dD)("data-v-0f901c44"),e=e(),(0,i.Cn)(),e),v=F((()=>(0,i._)("div",{class:"btns__container"},[(0,i._)("button",{class:"singup_btn"},"SingUp"),(0,i._)("button",{class:"login_btn"},"LogIn")],-1))),b={ref:"block",class:"home-block"},C={class:"header"},_={ref:"logo",class:"logo-name"},R=F((()=>(0,i._)("h1",null,"Code",-1))),k=F((()=>(0,i._)("h1",null,"Hub",-1))),x=[R,k],N={class:"home__description"},D={ref:"description",class:"description"};function $(e,t,o,n,s,l){const r=(0,i.up)("router-link"),a=(0,i.up)("Particles");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("h1",{ref:"titles",class:"home__title"},(0,g.zw)(s.currentTitle),513),v,(0,i._)("div",b,[(0,i._)("div",C,[(0,i.Wm)(r,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Home")])),_:1}),(0,i.Wm)(r,{to:"/repository"},{default:(0,i.w5)((()=>[(0,i.Uk)("Repositories")])),_:1})]),(0,i._)("div",_,x,512),(0,i._)("div",N,[(0,i._)("p",D," Welcome to CodeHub - your personal space for creativity with code! There are no complex functions or frills here, just a cozy place where you can translate your ideas into code. Write, test, experiment - whatever you want. Simple interface no extra stuff. Welcome to the world of endless lines of code! ",512)])],512),(0,i.Wm)(a)])}var I=o(8552),M=o(9242);const S=e=>((0,i.dD)("data-v-47cf8ea3"),e=e(),(0,i.Cn)(),e),B={class:"repositories-container"},T={class:"repositories-list"},O={style:{padding:"0 15px"}},U=["onClick"],E=S((()=>(0,i._)("div",{class:"repository-line"},null,-1)));function V(e,t,o,n,s,l){const r=(0,i.up)("FileItem");return(0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("h2",{onClick:t[0]||(t[0]=(...e)=>l.createRepository&&l.createRepository(...e))},"Repository List"),(0,i._)("div",{class:(0,g.C_)(["create-repository__container",{expanded:s.shifted}])},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.newRepositoryName=e),placeholder:"New Repository",class:"create-repository__container_input",onKeydown:t[2]||(t[2]=(0,M.D2)(((...e)=>l.createRepository&&l.createRepository(...e)),["enter"])),maxlength:"30"},null,544),[[M.nr,s.newRepositoryName]]),(0,i._)("button",{onClick:t[3]||(t[3]=(...e)=>l.toggleAddBtn&&l.toggleAddBtn(...e)),class:(0,g.C_)(["create-repository__container_btn",{"button-shifted":s.shifted}])}," + ",2)],2),(0,i._)("div",T,[(0,i._)("ul",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.repositories,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id},[(0,i._)("div",{class:"repository__name",onClick:t=>l.toggleRepository(e)},[E,(0,i.Uk)(" "+(0,g.zw)(e.name),1)],8,U),e===s.expandedRepository?((0,i.wg)(),(0,i.j4)(r,{key:0,item:e,onCreateFolder:l.createFolderInRepository,onCreateFile:l.createFileInRepository,onSelectFile:l.selectFileHandler},null,8,["item","onCreateFolder","onCreateFile","onSelectFile"])):(0,i.kq)("",!0)])))),128))])])])}const A={class:"repository-container"},L=(0,i._)("div",{class:"underline"},null,-1),W={key:0,class:"folder"},j={key:0,class:"folder-indicator"},z=(0,i._)("div",{class:"arrow_down"},null,-1),P=[z],q={key:1,class:"folder-indicator"},Z=(0,i._)("div",{class:"arrow_right"},null,-1),H=[Z],K={key:3,class:"create-buttons"},Y=["disabled"];function G(e,t,o,n,s,l){const r=(0,i.up)("CreateFileModal"),a=(0,i.up)("FileItem",!0);return(0,i.wg)(),(0,i.iD)("div",A,[L,(0,i._)("div",{class:"control",onDblclick:t[18]||(t[18]=(...e)=>l.renameItem&&l.renameItem(...e)),onClick:t[19]||(t[19]=e=>l.toggleFolder(o.item)),onMouseover:t[20]||(t[20]=e=>l.showDownloadButton=!0),onMouseleave:t[21]||(t[21]=e=>l.showDownloadButton=!1)},["folder"===o.item.type||"array"===o.item.type?((0,i.wg)(),(0,i.iD)("span",W,[o.item.children&&o.item.children.length>0?(0,i.wy)(((0,i.wg)(),(0,i.iD)("span",j,P,512)),[[M.F8,s.expandedFolder===o.item]]):(0,i.kq)("",!0),o.item.children&&o.item.children.length>0?(0,i.wy)(((0,i.wg)(),(0,i.iD)("span",q,H,512)),[[M.F8,s.expandedFolder!==o.item]]):(0,i.kq)("",!0),o.item.renaming?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:3,type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>o.item.newName=e),onBlur:t[2]||(t[2]=(...e)=>l.finishRename&&l.finishRename(...e)),onKeyup:t[3]||(t[3]=(0,M.D2)(((...e)=>l.finishRename&&l.finishRename(...e)),["enter"])),class:"rename-input",ref:"renameInput",maxlength:"15"},null,544)),[[M.nr,o.item.newName]]):((0,i.wg)(),(0,i.iD)("span",{key:2,onDblclick:t[0]||(t[0]=(...e)=>l.startRename&&l.startRename(...e)),class:"name"},(0,g.zw)(o.item.name),33))])):((0,i.wg)(),(0,i.iD)("span",{key:1,onClick:t[8]||(t[8]=(...e)=>l.selectFile&&l.selectFile(...e)),class:"file"},[o.item.renaming?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>o.item.newName=e),onBlur:t[6]||(t[6]=(...e)=>l.finishRename&&l.finishRename(...e)),onKeyup:t[7]||(t[7]=(0,M.D2)(((...e)=>l.finishRename&&l.finishRename(...e)),["enter"])),class:"rename-input",ref:"renameInput",maxlength:"15"},null,544)),[[M.nr,o.item.newName]]):((0,i.wg)(),(0,i.iD)("span",{key:0,onDblclick:t[4]||(t[4]=(...e)=>l.startRename&&l.startRename(...e)),class:"name"},(0,g.zw)(o.item.name),33))])),(0,i.wy)((0,i._)("div",{class:"download-btn",onClick:t[16]||(t[16]=(0,M.iM)((e=>l.toggleFolder(o.item)),["prevent"])),onMouseleave:t[17]||(t[17]=(...e)=>l.closeCreateButtons&&l.closeCreateButtons(...e))},["folder"===o.item.type?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"add_btn",onClick:t[9]||(t[9]=e=>l.toggleCreateButtons(o.item))})):"array"===o.item.type?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"add_btn",onClick:t[10]||(t[10]=e=>l.toggleCreateButtons(o.item))})):(0,i.kq)("",!0),"text/plain"===o.item.type?(0,i.wy)(((0,i.wg)(),(0,i.iD)("button",{key:2,class:"download_btn",onClick:t[11]||(t[11]=(...e)=>l.downloadFile&&l.downloadFile(...e))},null,512)),[[M.F8,l.showDownloadButton]]):(0,i.kq)("",!0),(0,i._)("button",{class:"delete_btn",onClick:t[12]||(t[12]=e=>l.deleteFile(this.item))}),s.createMenuVisible?((0,i.wg)(),(0,i.iD)("div",K,[this.item.level>=6?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"new-folder_btn",onClick:t[13]||(t[13]=(...e)=>l.createFolder&&l.createFolder(...e)),style:{border:"none","border-bottom":"1px solid black",color:"#27282d",opacity:"0.3"},disabled:this.item.level>=6}," folder ",8,Y)):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"new-folder_btn",onClick:t[14]||(t[14]=(...e)=>l.createFolder&&l.createFolder(...e)),style:{border:"none","border-bottom":"1px solid black",color:"#27282d",opacity:"this.item.level >= 6 ? 0.9 : 1"}}," folder ")),(0,i._)("button",{class:"new-file_btn",onClick:t[15]||(t[15]=(...e)=>l.createFile&&l.createFile(...e)),style:{"background-color":"rgba(197, 197, 197)",border:"none",color:"#27282d"}}," file ")])):(0,i.kq)("",!0)],544),[[M.F8,l.showDownloadButton]])],32),s.showModal?((0,i.wg)(),(0,i.j4)(r,{key:0,visible:s.showModal,prompt:s.modalPrompt,onConfirm:l.handleConfirmCreation,onCancel:l.handleCancel,itemType:s.modalType,onCreate:l.handleCreate,level:o.level+1},null,8,["visible","prompt","onConfirm","onCancel","itemType","onCreate","level"])):(0,i.kq)("",!0),!e.collapsed&&o.item.children&&o.item.children.length>0?((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,g.C_)([{expand:s.expandedFolder===o.item},""])},[(0,i._)("ul",null,[s.expandedFolder===o.item?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(o.item.children,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.name,style:{"align-items":"flex-start"}},[(0,i.Wm)(a,{item:e,level:o.level+1,newItemName:e.newItemName,onUpdateNewItemName:l.updateChildNewItemName},null,8,["item","level","newItemName","onUpdateNewItemName"])])))),128)):(0,i.kq)("",!0)])],2)):(0,i.kq)("",!0)])}o(6229),o(7330),o(2062);const J={key:0,class:"modal"},Q={class:"modal-content"};function X(e,t,o,n,s,l){return o.visible?((0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("div",Q,[(0,i._)("p",null,(0,g.zw)(o.prompt),1),"file"!==o.itemType?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,s:"","onUpdate:modelValue":t[0]||(t[0]=e=>s.itemName=e),placeholder:"New folder",onKeyup:t[1]||(t[1]=(0,M.D2)(((...e)=>l.confirmCreation&&l.confirmCreation(...e)),["enter"]))},null,544)),[[M.nr,s.itemName]]):(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,"onUpdate:modelValue":t[2]||(t[2]=e=>s.itemName=e),placeholder:"NewFile.txt",onKeyup:t[3]||(t[3]=(0,M.D2)(((...e)=>l.confirmCreation&&l.confirmCreation(...e)),["enter"]))},null,544)),[[M.nr,s.itemName]]),(0,i._)("button",{onClick:t[4]||(t[4]=(...e)=>l.confirmCreation&&l.confirmCreation(...e))},"Create"),(0,i._)("button",{onClick:t[5]||(t[5]=(...e)=>l.cancelCreation&&l.cancelCreation(...e))},"Cancel")])])):(0,i.kq)("",!0)}var ee={props:{visible:Boolean,prompt:String,itemType:String,level:{type:Number,default:0}},data(){return{itemName:""}},methods:{confirmCreation(){"folder"===this.itemType?this.createFolder():"file"===this.itemType&&this.createFile(),this.$emit("confirm",this.itemName,this.itemType),this.itemName=""},createFolder(){const e={type:"folder",name:this.itemName,lastModified:(new Date).getTime(),content:[],newItemName:""};""===e.name.trim()&&(e.name="New Folder"),this.$store.state.expandedFolder.level+1<7&&(e.level=this.$store.state.expandedFolder.level+1,this.$emit("create",e))},createFile(){this.$store.dispatch("createFileInRepository",this.itemName),this.$emit("create",this.$store.state.newFile)},cancelCreation(){this.$emit("cancel"),this.itemName=""}}};const te=(0,r.Z)(ee,[["render",X]]);var oe=te,ie={components:{CreateFileModal:oe},props:{item:Object,level:{type:Number,default:0},newItemName:String},data(){return{showModal:!1,modalPrompt:"",modalType:"",createMenuVisible:!1,expandedFolder:null,showDownloadButton:!0,showDeleteButton:!1}},methods:{showDownloadButton(){this.showDownloadButton=!1},showDeleteButton(){this.showDeleteButton=!0},hideDeleteButton(){this.showDeleteButton=!1},hideDownloadButton(){this.showDownloadButton=!0},toggleFolder(e){"folder"===e.type&&(this.expandedFolder===e?(this.expandedFolder=null,this.$store.dispatch("setSelectedFolder",e)):(this.expandedFolder=e,this.$store.dispatch("setSelectedFolder",e)),console.log("this.$store.state.expandedFolder",this.$store.state.expandedFolder))},toggleModal(){this.modalVisible=!this.modalVisible},handleCancel(){this.showModal=!1,this.toggleCreateButtons()},toggleCreateButtons(e){this.createMenuVisible=!this.createMenuVisible,this.$store.dispatch("setSelectedFolder",e),console.log("Current level:",this.item.level)},closeCreateButtons(){this.createMenuVisible=!1},handleConfirmCreation(e,t){"folder"===t?this.createFolder(e):"file"===t&&(this.createFile(e),console.log("create file")),this.showModal=!1,this.$store.dispatch("setSelectedFolder",this.expandedFolder),this.toggleCreateButtons()},createFolder(){this.showModal=!0,this.modalPrompt="New Folder Name",this.modalType="folder"},createFile(){this.showModal=!0,this.modalPrompt="New File Name",this.modalType="file"},handleCreate(e){this.item.children=this.item.children||[],this.item.children.push(e),this.expandedFolder=this.item,this.showModal=!1},selectFile(){console.log("BEFORE state.selectedFile",this.$store.state.selectedFile),this.$store.dispatch("setSelectedFile",this.item),console.log("after state.selectedFile",this.$store.state.selectedFile),console.log("this.item: ",this.item)},updateNewItemName(e){this.localNewItemName=e,this.$emit("updateNewItemName",e)},updateChildNewItemName(e){this.$emit("updateNewItemName",e)},createFileInItem(e){},downloadFile(){const e=this.item.content||"",t=new Blob([e],{type:"text/plain"}),o=document.createElement("a"),i=URL.createObjectURL(t);o.href=i,o.download=this.item.name,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(i)},renameItem(){this.item&&this.startRename()},startRename(){this.item.renaming=!0,this.item.newName=this.item.name,this.$nextTick((()=>{const e=this.$refs.renameInput;e&&e.focus()}))},finishRename(){""!==this.item.newName.trim()?(this.item.name=this.item.newName,this.item.renaming=!1,this.$store.dispatch("renameItem",this.item)):this.item.renaming=!1},deleteFile(e){if("file"===e.type&&this.$store.commit("setSelectedFile",this.item),"folder"===e.type&&(this.$store.commit("setSelectedFolder",e),this.$store.commit("deleteFile")),this.$store.state.selectedFile){this.$store.state.selectedFile.id;this.$store.commit("deleteFile"),this.$store.commit("setSelectedFile",null)}}}};const ne=(0,r.Z)(ie,[["render",G]]);var se=ne,le={data(){return{repositories:this.$store.state.repositories,newRepositoryName:"",expandedRepository:null,shifted:!1,isInputAnimationComplete:!1}},methods:{toggleAddBtn(){console.log("toggleAddBtn"),this.expandedRepository||(this.expandedRepository=!0),this.shifted=!this.shifted;const e=document.querySelector(".create-repository__container_btn"),t=document.querySelector(".create-repository__container");t.classList.toggle("expanded",this.shifted),e.classList.toggle("button-shifted",this.shifted),this.isInputAnimationComplete=!1,e.addEventListener("transitionend",(()=>{this.isInputAnimationComplete=!0})),setTimeout((()=>{e.classList.toggle("hidden",!this.shifted&&this.isInputAnimationComplete)}),1e3)},handleKeyUp(e){"Enter"===e.key&&this.createRepository()},createRepository(){""===this.newRepositoryName.trim()&&(this.newRepositoryName="New Repository"),this.$store.dispatch("createRepository",this.newRepositoryName),this.newRepositoryName="",console.log("this.$store.state.repositories",this.$store.state.repositories)},createFolderInRepository(){const e=prompt("Enter new folder name:")||"New Folder";this.$store.dispatch("createFolderInRepository",e)},createFileInRepository(){const e=prompt("Enter new file name:")||"NewFile";this.$store.dispatch("createFileInRepository",e)},selectFileHandler(e){this.$store.dispatch("selectFile",e),console.log("selectedFile!:",e)},downloadRepository(){},toggleRepository(e){this.expandedRepository===e?this.expandedRepository=null:this.expandedRepository=e,this.$store.dispatch("selectRepository",e)}},components:{FileItem:se}};const re=(0,r.Z)(le,[["render",V],["__scopeId","data-v-47cf8ea3"]]);var ae=re,de=o(5681),ce={__name:"Particles",setup(e){const t=async e=>{await(0,de.R)(e)},o=async e=>{console.log("Particles container loaded",e)};return(e,n)=>{const s=(0,i.up)("Particles",!0);return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s,{id:"tsparticles",particlesInit:t,particlesLoaded:o,options:{background:{color:{value:"#41434d"}},fullScreen:{enable:!0,zIndex:-1},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"grab"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#bbbcbe"},links:{color:"#bbbcbe",distance:180,enable:!0,opacity:.3,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:800},value:120},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:4}},detectRetina:!0}})])}}};const me=(0,r.Z)(ce,[["__scopeId","data-v-4acb1508"]]);var pe=me,ue={components:{RepositoryList:ae,Particles:pe},data(){return{titles:["Create","Experiment","Generate","Explore","Coding"],currentTitle:""}},mounted(){this.animateTitle()},methods:{updateTitle(e){this.currentTitle=e},animateTitle(){const e=this.$refs.block,t=this.$refs.logo,o=this.$refs.titles,i=this.$refs.description,n=I.ZP.timeline();this.titles.forEach(((e,t)=>{n.to(o,{opacity:1,duration:.5,onComplete:()=>this.updateTitle(e)}).to(o,{opacity:1,y:0,duration:.5})})),n.to(o,{x:660,duration:3}).to(e,{opacity:1,x:0,duration:3},"-=3").to(o,{opacity:0,duration:1}),n.to(i,{opacity:0,scale:.6,duration:0},"-=2").to(i,{opacity:1,scale:1,duration:2},"-=2").to(t,{opacity:0,x:-150,duration:0}).to(t,{opacity:1,x:0,duration:2},"-=1.8")}}};const he=(0,r.Z)(ue,[["render",$],["__scopeId","data-v-0f901c44"]]);var ye=he;const fe={class:"header"},we={class:"flex-container"},ge={class:"column"};function Fe(e,t,o,n,s,l){const r=(0,i.up)("router-link"),a=(0,i.up)("RepositoryList"),d=(0,i.up)("CodeEditor"),c=(0,i.up)("CommentSection");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",fe,[(0,i.Wm)(r,{to:"/",class:"back_btn"})]),(0,i._)("div",we,[(0,i._)("div",null,[(0,i.Wm)(a,{onSelectRepository:l.setSelectedRepository},null,8,["onSelectRepository"])]),(0,i._)("div",ge,[(0,i.Wm)(d),(0,i.Wm)(c)])])])}const ve=e=>((0,i.dD)("data-v-60dbec27"),e=e(),(0,i.Cn)(),e),be={key:0,class:"code-editor__container"},Ce={style:{margin:"0"}},_e=["disabled"],Re={key:1},ke=ve((()=>(0,i._)("p",null,"No file selected",-1))),xe=[ke];function Ne(e,t,o,n,s,l){const r=(0,i.up)("Codemirror");return(0,i.wg)(),(0,i.iD)("div",null,[e.$store.state.selectedFile?((0,i.wg)(),(0,i.iD)("div",be,[(0,i._)("h3",Ce,(0,g.zw)(e.$store.state.selectedFile?e.$store.state.selectedFile.name:"")+(0,g.zw)(s.isFileChanged?"*":""),1),(0,i.Wm)(r,{value:s.textarea,"onUpdate:value":t[0]||(t[0]=e=>s.textarea=e),options:n.cmOptions,placeholder:"test placeholder",height:600,onInput:l.change},null,8,["value","options","onInput"]),(0,i._)("div",{class:"code-editor__save-btn",style:(0,g.j5)({opacity:s.isFileChanged?1:.5})},[(0,i.wy)((0,i._)("button",{onClick:t[1]||(t[1]=(...e)=>l.saveFileContent&&l.saveFileContent(...e)),disabled:!e.$store.state.selectedFile,style:{width:"100%","background-color":"transparent",border:"none"}}," SAVE ",8,_e),[[M.F8,this.$store.state.selectedFile]])],4)])):((0,i.wg)(),(0,i.iD)("div",Re,xe))])}o(8720),o(6107);var De=o(4870),$e={components:{Codemirror:f.ZP},setup(){const e=(0,De.iH)("\nvar i = 0;\nfor (; i < 9; i++) {\n  console.log(i);\n  // more statements\n}");return{code:e,cmOptions:{mode:"text/javascript",theme:"dracula"}}},props:{selectedRepository:Array},data(){return{textarea:"",isFileChanged:!1}},watch:{"$store.state.selectedFile":function(e){e&&"text/plain"===e.type&&(this.textarea=e.content||"")}},methods:{loadFileContent(e){if(e&&"text/plain"===e.type){const t=CodeMirror(this.$refs.codeMirror,{value:e.content||"",mode:"text/plain",lineNumbers:!0});t.on("change",(e=>{this.$store.commit("updateFileContent",e.getValue())}))}},saveFileContent(){this.$store.commit("updateFileContent",this.textarea),this.isFileChanged=!1},change(e){this.$store.commit("updateFileContent",e),this.isFileChanged=!0}},computed:{selectedFile(){return this.selectedRepository&&this.selectedRepository.files?this.selectedRepository.files.find((e=>e===this.$store.state.selectedFile)):null}}};const Ie=(0,r.Z)($e,[["render",Ne],["__scopeId","data-v-60dbec27"]]);var Me=Ie;const Se=e=>((0,i.dD)("data-v-189ca7df"),e=e(),(0,i.Cn)(),e),Be={class:"comments__container"},Te=Se((()=>(0,i._)("h2",null,"Comments List",-1))),Oe={class:"comment-list"},Ue={class:"add-comment"};function Ee(e,t,o,n,s,l){return(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",{class:(0,g.C_)({comments:!0,hidden:s.isCommentsVisible})},[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>l.toggleComments&&l.toggleComments(...e)),class:"toggle-btn__comments"}),(0,i._)("div",Be,[Te,(0,i._)("ul",Oe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.filteredComments,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id},[(0,i._)("strong",null,(0,g.zw)(e.author),1),(0,i.Uk)(": "+(0,g.zw)(e.text),1)])))),128))])]),(0,i._)("div",Ue,[(0,i.wy)((0,i._)("textarea",{class:"add-comment__textarea",style:{"border-radius":"2px"},"onUpdate:modelValue":t[1]||(t[1]=e=>s.newComment=e),placeholder:"Write new comment..."},null,512),[[M.nr,s.newComment]]),(0,i._)("button",{style:{"border-radius":"4px"},onClick:t[2]||(t[2]=(...e)=>l.addComment&&l.addComment(...e))},"publish")])],2)],512)),[[M.F8,this.$store.state.selectedFile]])}var Ve={data(){return{newComment:"",isCommentsVisible:!1}},computed:{comments(){return this.$store.state.comments},filteredComments(){const e=this.$store.state.selectedFile;if(e&&e.lastModified){const t=e.lastModified;return this.comments.filter((e=>e.file===t))}return[]}},methods:{addComment(){if(""!==this.newComment.trim()){const e={id:Date.now(),author:"User",text:this.newComment.trim(),file:this.$store.state.selectedFile.lastModified};this.$store.commit("addComment",e),this.newComment=""}},toggleComments(){this.isCommentsVisible=!this.isCommentsVisible}}};const Ae=(0,r.Z)(Ve,[["render",Ee],["__scopeId","data-v-189ca7df"]]);var Le=Ae,We={components:{RepositoryList:ae,CodeEditor:Me,CommentSection:Le},data(){return{selectedRepository:{}}},methods:{setSelectedRepository(e){this.selectedRepository=e}}};const je=(0,r.Z)(We,[["render",Fe],["__scopeId","data-v-6b6388b2"]]);var ze=je;const Pe=[{path:"/",name:"home",component:ye},{path:"/repository",name:"repository",component:ze}],qe=(0,w.p7)({history:(0,w.PO)("/"),routes:Pe});var Ze=qe,He=o(6026);new Vue({router:Ze,store:y,render:e=>e(d),mounted(){this.$nextTick((()=>{this.$use(f.Zc,{componentName:"customName"}),this.$use(He.Z),this.$mount("#app")}))}})}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,i,n,s){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],s=e[c][2];for(var r=!0,a=0;a<i.length;a++)(!1&s||l>=s)&&Object.keys(o.O).every((function(e){return o.O[e](i[a])}))?i.splice(a--,1):(r=!1,s<l&&(l=s));if(r){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,n,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,l=i[0],r=i[1],a=i[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(a)var c=a(o)}for(t&&t(i);d<l.length;d++)s=l[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},i=self["webpackChunkvue_code_collaborator"]=self["webpackChunkvue_code_collaborator"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(7573)}));i=o.O(i)})();
//# sourceMappingURL=app.1f51c31f.js.map
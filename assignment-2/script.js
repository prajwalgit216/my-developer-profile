const input=document.getElementById('taskInput');
const list=document.getElementById('taskList');
const count=document.getElementById('count');
const addBtn=document.getElementById('addBtn');
const clearBtn=document.getElementById('clearBtn');
const modeBtn=document.getElementById('modeBtn');
const filterBtns=[...document.querySelectorAll('.filters button')];
let currentFilter='all';

modeBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  modeBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
});

function updateCount(){count.textContent=list.children.length+' tasks'}

function createTask(text){
  const li=document.createElement('li');
  const span=document.createElement('span'); span.textContent=text;
  span.onclick=()=>{li.classList.toggle('done');applyFilter()};
  const actions=document.createElement('div'); actions.className='actions';
  const edit=document.createElement('button'); edit.textContent='✏️'; edit.onclick=()=>editTask(span);
  const del=document.createElement('button'); del.textContent='🗑️'; del.onclick=()=>{li.remove();updateCount()};
  actions.append(edit,del); li.append(span,actions);
  return li;
}

function addTask(){
  const text=input.value.trim(); if(!text) return;
  list.appendChild(createTask(text)); input.value=''; updateCount(); applyFilter();
}
addBtn.addEventListener('click',addTask);
input.addEventListener('keydown',e=>{if(e.key==='Enter') addTask()});

function editTask(span){
  const inp=document.createElement('input'); inp.value=span.textContent; inp.style.flex='1';
  span.replaceWith(inp); inp.focus();
  const save=()=>{span.textContent=inp.value||'Untitled'; inp.replaceWith(span)};
  inp.onblur=save; inp.onkeydown=e=>{if(e.key==='Enter') save()};
}

clearBtn.addEventListener('click',()=>{list.innerHTML='';updateCount()});

filterBtns.forEach(btn=>btn.addEventListener('click',()=>{
  filterBtns.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); currentFilter=btn.dataset.filter; applyFilter();
}));

function applyFilter(){
  [...list.children].forEach(li=>{
    if(currentFilter==='all') li.style.display='flex';
    if(currentFilter==='active') li.style.display=li.classList.contains('done')?'none':'flex';
    if(currentFilter==='done') li.style.display=li.classList.contains('done')?'flex':'none';
  });
}
const new_note = document.getElementById("new_note");
const save_all = document.getElementById("save_all");
const my_notes = document.getElementById("my_notes");
const body = document.getElementsByTagName("body");
const opacity_element = document.getElementById("opacity_element");
const alert_container = document.getElementById("alert");
const form = document.getElementById("alert_form");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

const title = document.getElementById("note_title");
const description = document.getElementById("note_body");
const note_info = document.getElementById("note_info");

const alert_icons = document.getElementById("alert_icons");
const text = alert_icons.getElementsByClassName("fa-font");
const check = alert_icons.getElementsByClassName("fa-check");
const bold = alert_icons.getElementsByClassName("fa-bold");
const italic = alert_icons.getElementsByClassName("fa-italic");
const underline = alert_icons.getElementsByClassName("fa-underline");
const strikethrough = alert_icons.getElementsByClassName("fa-strikethrough");
const plus = alert_icons.getElementsByClassName("fa-search-plus");
const minus = alert_icons.getElementsByClassName("fa-search-minus");
const image = alert_icons.getElementsByClassName("fa-image");

const file_input = document.getElementById('fileInput');

let focused;
let editing_notes = false;

let my_notes_array = [];
if(localStorage.notes){
    my_notes_array = JSON.parse(localStorage.notes);
    my_notes_array.forEach(note =>{
        const note_id = note.id;
        const note_title = note.title;
        const note_description = note.description;
        const note_info = note.info;
        const note_image = note.image;

        const note_to_append = `
            <div style = "background-image:url(${note_image})" class = "note" id = "note${note_id}">
                <div class = "title_body">
                    <h1>${note_title}</h1>
                    <p>${note_description}</p>
                </div>
                <div class = "for_back"></div>
            </div>
        `

        my_notes.insertAdjacentHTML("afterbegin", note_to_append);
    });
    remove_and_add();
}

new_note.addEventListener("click", () =>{
    editing_notes = false;
    if(document.querySelectorAll(".in_note")){
        document.querySelectorAll(".in_note").forEach(val => val.remove());
    };
    opacity_element.style.display = 'block';
    alert_container.style.display = "flex";
    alert_container.style.backgroundColor = 'rgb(245, 245, 245)';
    
    text[0].classList.remove("active");
    check[0].classList.remove("active");
});

save_all.addEventListener('click', () =>{
    localStorage.notes = JSON.stringify(my_notes_array);
});

text[0].addEventListener("click", add_text_note);
check[0].addEventListener("click", add_check_note);
bold[0].addEventListener("click", make_text_bold);
italic[0].addEventListener("click", make_text_italic);
underline[0].addEventListener('click', make_text_underline);
strikethrough[0].addEventListener('click', make_text_linethrough);
plus[0].addEventListener('click', make_text_bigger);
minus[0].addEventListener("click", make_text_smaller);
image[0].addEventListener('click', add_image);

file_input.addEventListener('change', upload);

document.addEventListener("click", check_ckeckbox);
document.addEventListener('keydown', e =>{
    enter_click(e);
});
document.addEventListener('click', (e) =>{
    if(e.target.classList.contains("text_row")) focused = e.target;
    else if(e.target.id == "back_image") focused = e.target;
});

submit.addEventListener("click", on_submit);
cancel.addEventListener("click", on_cancle);

function add_text_note(){
    if(!document.getElementById("text_note")){
        const text_note = `
            <div id = "text_note" contenteditable="true" class = "text_row">
                
            </div>
        `
        note_info.insertAdjacentHTML("beforeend", text_note);
        document.getElementById("text_note").focus();
        focused = document.activeElement;
        text[0].classList.add("active");
    }else{
        if(note_info.textContent != ''){
            let clearAll = confirm("Are you sure that you want to delete all your notes?");
            if(clearAll){
                note_info.innerHTML = '';
                text[0].classList.remove("active");
            }
        }
    }
}

function add_check_note(){
    if(check[0].classList.contains("active")){
        check[0].classList.remove("active");
    }else{
        if(!document.getElementById("text_note")){
            const text_note = `
                <div id = "text_note" contenteditable="true">

                </div>
            `
            note_info.insertAdjacentHTML("beforeend", text_note);
            text[0].classList.add("active");

            const addCheck = `
                <div contenteditable="true" class = "text_row">
                    <input type = "checkbox" class = "checkboxInAlert">
                </div>
            `;
            document.getElementById("text_note").insertAdjacentHTML("beforeend", addCheck);
            focused = document.getElementsByClassName('text_row')[0];

            check[0].classList.add("active");
        }else{
            check[0].classList.add("active");
        }
    }
}

function check_ckeckbox(e){
    if(e.target.type == "checkbox"){
        const textDecoration = window.getComputedStyle(e.target.parentElement).textDecoration;
        if(e.target.classList.contains("checkboxInAlert")){
            e.target.classList.remove("checkboxInAlert");
            e.target.parentElement.style.textDecoration = 
                textDecoration.includes("underline") ? 'line-through underline' : 'line-through';
            e.target.parentElement.style.color = 'rgb(128, 128, 128)';
        }else{
            e.target.classList.add("checkboxInAlert");
            e.target.parentElement.style.textDecoration =
                textDecoration.includes("underline") ? "underline" : "none";
            e.target.parentElement.style.color = 'black';
        }
    }
}

function enter_click(e){
    if(note_info.contains(focused)){
        if(e.key == 'Enter' && check[0].classList.contains("active")){
            e.preventDefault();
            const addCheck = `
                <div contenteditable="true" class = "text_row">
                    <input type = "checkbox" class = "checkboxInAlert">
                </div>
            `;
            document.activeElement.insertAdjacentHTML("afterend", addCheck);
            document.activeElement.nextElementSibling.focus();
            focused = document.activeElement;
        }
        else if(e.key == 'Enter' && !check[0].classList.contains("active")){
            e.preventDefault();
            const addText = `
                <div contenteditable="true" class = "text_row">
                    
                </div>
            `;
            document.activeElement.insertAdjacentHTML("afterend", addText);
            document.activeElement.nextElementSibling.focus();
            localStorage.focused = JSON.stringify(document.activeElement);
            focused = document.activeElement;
        }
    }
}

function on_submit(e){
    if(!/\S/.test(title.value.trim())){
        e.preventDefault();
        if(!document.getElementById('error_message')){
            title.insertAdjacentHTML("afterend", "<label id = 'error_message'>You must write a title</label>");
        }
    }else{
        e.preventDefault();
        focused = document.querySelector('body');
        opacity_element.style.display = 'none';
        alert_container.style.display = 'none';

        if(editing_notes == false){
            insert_note(title.value, description.value, my_notes_array.length);
            my_notes_array.push({
                id: my_notes_array.length,
                title: title.value,
                description: description.value,
                info: JSON.stringify(note_info.innerHTML)
            });
        }else{
            const match = editing_notes.id.match(/\d+/);
            const id = match ? parseInt(match[0]) : NaN;
            const info = my_notes_array.find(val => val.id == id);
            
            info.title = title.value;
            info.description = description.value;
            info.info = JSON.stringify(note_info.innerHTML);
            
            editing_notes.innerHTML = `
                <div class = "title_body">
                    <h1>${info.title}</h1>
                    <p>${info.description}</p>
                </div>
                <div class = "for_back"></div>
            `
        }

        form.reset();
        note_info.innerHTML = "";
        text[0].classList.remove("active");
        check[0].classList.remove("active");
        if(document.getElementById('error_message')) document.getElementById('error_message').remove();
        
        remove_and_add();
    }
}
function insert_note(title, description, id){
    const note = `
        <div class = "note" id = "note${id}">
            <div class = "title_body">
                <h1>${title}</h1>
                <p>${description}</p>
            </div>
            <div class = "for_back"></div>
        </div>
    `

    my_notes.insertAdjacentHTML("afterbegin", note);
}

function on_cancle(e){
    e.preventDefault();
    opacity_element.style.display = 'none';
    alert_container.style.display = 'none';
    form.reset();
    note_info.innerHTML = "";
    text[0].classList.remove("active");
    check[0].classList.remove("active");
    if(document.getElementById('error_message')) document.getElementById('error_message').remove();
}

function make_text_bold(e){
    e.preventDefault();
    if(focused.classList.contains('text_row')){
        window.getComputedStyle(focused).fontWeight == 700 ? focused.style.fontWeight = 400 : focused.style.fontWeight = 700;
    }
}

function make_text_italic(e){
    e.preventDefault();
    if(focused.classList.contains('text_row')){
        window.getComputedStyle(focused).fontStyle == "normal" ? focused.style.fontStyle = "italic" : focused.style.fontStyle = "normal";
    }
}

function make_text_underline(e){
    e.preventDefault();
    if(focused.classList.contains('text_row')){
        const textDecoration = window.getComputedStyle(focused).textDecoration;

        if(textDecoration.includes("underline") && textDecoration.includes("line-through")){
            focused.style.textDecoration = "line-through";
        }else if(!textDecoration.includes("underline") && !textDecoration.includes("line-through")){
            focused.style.textDecoration = "underline";
        }else if(!textDecoration.includes("underline") && textDecoration.includes("line-through")){
            focused.style.textDecoration = "underline line-through";
        }else if(textDecoration.includes("underline") && !textDecoration.includes("line-through")){
            focused.style.textDecoration = "none";
        }
    }
}

function make_text_linethrough(e){
    e.preventDefault();
    if(focused.classList.contains('text_row')){
        const textDecoration = window.getComputedStyle(focused).textDecoration;

        if(textDecoration.includes("underline") && textDecoration.includes("line-through")){
            focused.style.textDecoration = "underline";
        }else if(!textDecoration.includes("underline") && !textDecoration.includes("line-through")){
            focused.style.textDecoration = "line-through";
        }else if(!textDecoration.includes("underline") && textDecoration.includes("line-through")){
            focused.style.textDecoration = "none";
        }else if(textDecoration.includes("underline") && !textDecoration.includes("line-through")){
            focused.style.textDecoration = "line-through underline";
        }
    }
}

function make_text_bigger(e){
    e.preventDefault();
    if(focused.classList.contains('text_row')){
        const font_size = window.getComputedStyle(focused).fontSize;
        if(parseFloat(font_size) < 40) focused.style.fontSize = (parseFloat(font_size) * 1.2) + "px";
    }
}

function make_text_smaller(e){
    e.preventDefault();
    if(focused.classList.contains('text_row')){
        const font_size = window.getComputedStyle(focused).fontSize;
        if(parseFloat(font_size) > 12) focused.style.fontSize = (parseFloat(font_size) * 5/6) + "px";           
    }
}

function add_image(e){
    e.preventDefault();
    file_input.click();
}

function upload(e){
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = (e) =>{
            note_info.insertAdjacentHTML("beforeend", `<img class="preview" src="" alt="img" style="display: none; width: 200px">`);
            const imgs = document.querySelectorAll('.preview');
            imgs[imgs.length -  1].src = e.target.result;
            imgs[imgs.length - 1].style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function show_note(e, elem, note_id){
    e.preventDefault();
    editing_notes = elem;
    const match = note_id.match(/\d+/);
    const id = match ? parseInt(match[0]) : NaN;
    const info = my_notes_array.find(val => val.id == id);
    
    alert_container.style.backgroundColor = `rgb(245, 245, 245)`;

    note_info.innerHTML = JSON.parse(info.info);
    if(document.getElementById('back_image')) document.getElementById('back_image').value = info.image;
    title.value = info.title;
    description.value = info.description;

    document.getElementById('note_info').querySelectorAll('div').forEach(elem =>{
        if(window.getComputedStyle(elem).color == "rgb(128, 128, 128)") elem.querySelector('input[type="checkbox"]').checked = true;
    });
    if(document.getElementById('text_note')) text[0].classList.add('active');
}

function remove_and_add(){
    document.querySelectorAll('.note').forEach(val =>{
        val.addEventListener('click', (e) =>{
            document.querySelectorAll(".in_note").forEach(val => val.remove());
            opacity_element.style.display = 'block';
            alert_container.style.display = "flex";
            show_note(e, e.target.closest('.note'), val.id);
        });
    });
}
/**
 * Created by Li on 2017/3/12.
 */


function getAddMode() {
    let control = document.getElementById('btn').childNodes;
    for (let i = 1; i < control.length; i++) {
        if (control[i].nodeType === 1) {
            control[i].addEventListener("click", renderViewElement, false);
        }
    }
}

function renderViewElement() {
    let num = document.getElementById('num').value;
    let view = document.getElementById('view');
    let numNode = document.createElement('li');
    numNode.textContent = num.trim();
    switch (this.id) {
        case "btn-left-in":
            view.insertBefore(numNode, document.querySelector('#view li:nth-child(1)'));
            break;
        case "btn-right-in":
            view.appendChild(numNode);
            break;
        case "btn-left-out":
            if (view.childElementCount !== 0) {
                alert(view.firstElementChild.textContent);
                view.removeChild(view.firstElementChild);
            }
            break;
        case "btn-right-out":
            if (view.childElementCount !== 0) {
                alert(view.firstElementChild.textContent);
                view.removeChild(view.lastElementChild);
            }
            break;
        default:
            break;
    }
    for (let i = 0; i < view.childElementCount; i++) {
        view.children[i].addEventListener('click', deleteQueueItem, false);
    }
}

function deleteQueueItem() {
    let view = document.getElementById('view');
    view.removeChild(this);
}

getAddMode();

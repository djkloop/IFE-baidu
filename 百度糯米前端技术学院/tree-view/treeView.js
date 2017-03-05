/**
 * Created by Li on 2017/3/4.
 */
window.$ = function (selector) {
    return document.querySelector(selector);
};

let nodes = [{
    name: "父节点1",
    children: [{name: "子节点1"}, {name: "子节点2"}]
},
    {
        name: "父节点2",
        children: [{name: "子节点3"}, {
            name: "父节点3",
            children: [{name: "子节点5"}]
        }]
    }
];
var nodesTest = [{
    name: "父节点1",
    children: [{
        name: "子节点11"
    },
        {
            name: "子节点12"
        },
        {
            name: "子节点13",
            children: [{name: "叶子节点131"}]
        }]
},
    {
        name: "父节点2",
        children: [{name: "子节点21"},
            {
                name: "子节点22",
                children: [{name: "子节点221"},
                    {name: "叶子节点222", children: [{name: "叶子节点2221"}]}]
            }]
    },
    {
        name: "父节点3",
        children: [{name: "子节点31"},
            {
                name: "子节点32",
                children: [{name: "叶子节点321"}]
            }]
    }];

let DOMTreeRender = (nodes, DOMNode) => {
    let str = '';

    (function insertNode(data) {
        if (data.length > 0) {
            data.map(item => {
                if (item.children) {
                    str += `<div class="tree" ><div class="folder" onclick="toggleSlider(event)"><i class="fa fa-minus node-icon"></i><i class="fa fa-folder-open node-icon"></i><a class='folder-a' href='#'>${item.name}</a></div><div class='file-node slide'>`;

                    insertNode(item.children);
                    str += "</div></div>";
                } else {
                    str += `<div class="file"><i class="fa fa-file-o node-icon"></i><a class='file-node'>${item.name}</a></div>`;
                }
            })
        }
    })(nodes);

    $(DOMNode).innerHTML = str;
};

/*
 * 点击文件夹隐藏子文件和子文件夹
 * */
function toggleSlider(event) {

    let folderIcon = event.target.previousSibling,
        plusIcon = folderIcon.previousSibling,
        /*
         点击的DOM元素为文件夹节点，
         获取点击节点的父亲节点的下一个兄弟节点
         */
        fileNode = event.target.parentNode.nextSibling;

    exchangeNodeStyle(plusIcon, 'fa-minus', 'fa-plus');//加减图标互换
    exchangeNodeStyle(folderIcon, 'fa-folder-open', 'fa-folder-o');//文件夹打开关闭图标互换

    if (fileNode.classList.contains('slide-up')) {
        fileNode.classList.remove('slide-up');
    } else {
        fileNode.classList.add('slide-up');
    }
}

/*
 * 交换某个节点的两个CSS样式
 * perStyle、curStyle必须有一个
 * */
function exchangeNodeStyle(node, preStyle, curStyle) {

    if (node.classList.contains(preStyle)) {
        node.classList.remove(preStyle);
        node.classList.add(curStyle)
    } else {
        node.classList.remove(curStyle);
        node.classList.add(preStyle)
    }
}

DOMTreeRender(nodesTest, '#tree');//渲染树形控件



(function(){
    const commentsListSection = document.querySelector(".comments-list-section");
    const commentInput = document.querySelector(".add_comments-input");
    const addCommentButton = document.querySelector(".add_comments-button");
    let commentLatestId = 1;
    
    const getNewCommentContainer = (commentString, parentCommentContainer) => {
        const id = commentLatestId++;
        const date = new Date();

        const ulItem = document.createElement("ul");
        ulItem.setAttribute("class", "comments-list-container");
        ulItem.setAttribute("id", `comment_${id}`);

        const liItem1 = document.createElement("li");
        liItem1.setAttribute("class", "comment-list-item");
        liItem1.textContent = `${commentString} - ${date.toLocaleString('default', { day : "2-digit", month: 'short',year : "numeric" })}`
        const liItem2 = document.createElement("li");
        liItem2.setAttribute("class","icons-list-container");
        
        const iconItem1 = document.createElement("i");
        iconItem1.setAttribute("class", "fa-solid fa-reply");
        iconItem1.addEventListener("click",()=>{
            toggleReplySection(liItem3);
        });
        const iconItem2 = document.createElement("i");
        iconItem2.setAttribute("class", "fa-solid fa-trash");
        iconItem2.addEventListener("click", ()=>{
            handleDelete(`comment_${id}`);
        });
        
        liItem2.append(iconItem1,iconItem2);
        
        const liItem3 = document.createElement("li");
        liItem3.classList.add("reply-section-container");
        liItem3.style.display = "none";

        const replyInput = document.createElement("input");
        replyInput.setAttribute("class", "reply-input");
        replyInput.setAttribute("placeholder", "Enter a reply...");
        const replyButton = document.createElement("button");
        replyButton.setAttribute("class", "reply-button");
        replyButton.textContent = "Reply";
        replyButton.addEventListener("click",()=>{
            handleReply(replyInput.value, ulItem);
            replyInput.value = "";
            toggleReplySection(liItem3);
        });
        
        liItem3.append(replyInput, replyButton);

        ulItem.append(liItem1,liItem2,liItem3);
        parentCommentContainer.appendChild(ulItem);
    };

    addCommentButton.addEventListener('click', (e)=>{
        if(commentInput.value){
            getNewCommentContainer(commentInput.value, commentsListSection);
            commentInput.value = "";
        }
    });

    function toggleReplySection(liItem){
        console.log(liItem);
        liItem.style.display = liItem.style.display ? "" :"none";
    }

    function handleDelete(commentId){
        document.getElementById(commentId).remove();
    }

    function handleReply(replyString, parentCommentContainer){
        const liItem = document.createElement("li");
        parentCommentContainer.appendChild(liItem);
        getNewCommentContainer(replyString,liItem);
    }
})();

# Lofi Study Session

I created a website that incorporates the Pomodoro app, the Todo app, a music player, and the YouTube Search API. It is designed for people who want to study while also relaxing. Each application has its own set of applications. See the markdown below for more information.

Here's the link of the live site: https://studentstudysession.vercel.app/

## The following languages I used:
<div align-items: left>
<img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" width="50">
<img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" width="50">
&nbsp;
<img src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" width="45">
&nbsp;
  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" width="45">
</div >
<br>
<img src="src\bg-image\Student pomodoro img.JPG" alt= “” >

## List of applications

<ul style="text-align: left;">
<li style="margin-left: -3rem;">Todo App</li>
<li style="margin-left: -3rem;">Pomodoro App</li>
<li style="margin-left: -3rem;">Music Player App</li>
<li style="margin-left: -3rem;">Youtube Search API</li>
</ul>

# Todo App

<p>It allows you to increase your productivity by preventing you from forgetting things, assisting you in prioritizing tasks, managing tasks effectively, using time wisely, and improving your time management and workflow.</p>

### What's the benefits of Todo App list?

The to-do app will help you stay organized, which is one of the most important reasons to use it. It will be easier to manage if you make a list of all your tasks. It helps you stay focused after you've completed all of your tasks. while creating mental space for other creative tasks or ideas.

When you have completed the task, just simply click the checkbox button, it will give you a sense of accomplishment and motivate you to move on to the next task.

### Function description of Todo App:

This to-do list is implemented using JavaScript, and utilizes the DOM to manipulate the HTML elements on the page.
<ul style="text-align: left;">
<li style="margin-left: -3rem;"> The first step is to select the relevant elements on the page using their ID or class. The next step is to set up an event listener for the "load" event of the window, which will retrieve any tasks that were previously saved in local storage.

<li style="margin-left: -3rem;"> Using a forEach loop, each saved task is appended to the container on the page. For each task, a checkbox, text input field, "edit" and "delete" buttons are created and appended to a div element.

<li style="margin-left: -3rem;"> The "edit" button allows the user to toggle the text input field between read-only and editable, while the "delete" button removes the entire task from the page and from local storage.

<li style="margin-left: -3rem;"> Finally, a "clear all" button is created which removes all tasks from the page and clears the local storage. A brief opacity transition is applied when the "delete" and "clear all" buttons are clicked for a smoother user experience.
</ul>

This to-do list utilizes local storage to persist tasks across page reloads, and JSON is used to store and retrieve the data in a format that can be easily manipulated in JavaScript.

# Pomodoro App

Pomodoro is used for studying to set a time for your sessions and breaks. You can have deep work for 25 minutes then after that you'll get 5mins break every session. It is used for time management for students to study throughout the day.


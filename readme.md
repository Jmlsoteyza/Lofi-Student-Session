
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

## List of applications:

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

Pomodoro is a study technique that involves setting a timer for your sessions and breaks. You can do deep work for 25 minutes and then take a 5-minute break at the end of each session. It is used to help students manage their time so that they can study throughout the day.

It's worth noting that the Pomodoro technique may not work for everyone. Some people may find it too rigid or restrictive, while others may need longer or shorter work and break intervals. Ultimately, the key to success with any study technique is finding what works best for you and your learning style.

### Function description of Pomodoro App:
<ul style="text-align: left;">
<li style="margin-left: -3rem;">The Pomodoro App is designed to help users manage their time more efficiently. To create the app, I first defined the values for the seconds and minutes that make up the break and session lengths. Next, I set up the relevant elements on the page using their IDs or classes. To do this, I used a for loop to call all of the buttons in the arrays.

<li style="margin-left: -3rem;">Once I had set up the elements on the page, I retrieved the values I needed from the DOM and put them together in a function. Within this function, I added event listeners for the break and session buttons, which allow users to increment or decrement the length of each session.

<li style="margin-left: -3rem;">In addition to these basic features, I also included a setTimerValue() function that automatically switches the app from session mode to break mode when the session is complete. Finally, I created a startStopTimer() function that tracks the active status of the timer and counts down the seconds using the setInterval method when the timer is active.
</ul>


# Music Player

I have created a music player that includes pomodoro and to-do apps to enhance the user's studying or work experience. The music player is designed to provide a relaxing atmosphere, enabling the user to focus better while studying or working on their tasks. Additionally, the player has a variety of music options that can help to set the user's mood according to their preference, making the experience more personalized. By using this music player, the user can expect to feel calmer, more motivated, and focused, which can lead to increased productivity and better overall results. 

### Function description of Music Player:

<ul style="text-align: left;">
<li style="margin-left: -3rem;">This app is designed to provide a calming experience to users while they study or work on their tasks. To create the music player, I first set up the necessary elements from the DOM to obtain the required values. Once the buttons and values were set up, I created an array of songs with information on the song, singer, and images. Next, I set a loop using a variable called musicSongIndex, which I later called using the function songIn.

<li style="margin-left: -3rem;">The code also includes event listeners for the play button, volume input, and progress container. When the play button is clicked, the code checks if the audio is paused and either plays or pauses the audio accordingly. The volume input is used to adjust the volume of the audio when the value is changed. The progress container is used to update the progress of the song and allows the user to skip to a specific point in the song. Additionally, I use variables such as duration, current time, clientWidth, and e.offsetX to track the progress of the current song in the music player.

<li style="margin-left: -3rem;">Finally, I created a music list using the insertAdjacentHTML method to remove the code in the HTML file, and a for loop to iterate over an array of songs.
</ul>

# Youtube Search API

I developed a YouTube search API to allow users to customize music while browsing the website, eliminating the need for them to go to YouTube, and if they aren't satisfied with the music player, they can simply dive into the YouTube side bar. It will also make browsing YouTube easier for the user, as they will simply click the sidebar button to search for what they are looking for.

### Function description of Youtube API:
<ul style="text-align: left;">
<li style="margin-left: -3rem;">The function for the YouTube API has been designed to make it easy for users to search for videos directly from the mobile version of the webpage. This has been achieved by implementing a sidebar button that toggles the YouTube search container when clicked. The button is styled using the aria-expanded and data-visible attributes of the DOM, and the CSS translateX property to shift the container from 100% to 0. This allows the container to slide in and out of view smoothly. The button is also set to listen for click events, so that it can toggle the container accordingly.

<li style="margin-left: -3rem;">The YouTube API function itself is responsible for fetching the search results from the YouTube Data API using the user's search query. It then maps the results to a simplified object structure that contains the video title, description, thumbnail, video ID, and channel title. The function then passes this object to the displayResults() function, which creates the necessary HTML elements to display the search results on the page. Finally, the function adds an event listener to each video link, so that when a user clicks on a video, the displayResults() function replaces the search results with an embedded YouTube video player for that video.

<li style="margin-left: -3rem;">I obtained the YouTube API by accessing the documentation at https://developers.google.com/youtube/v3/docs/?apix=true. From there, I requested the YouTube data v3 API, which allowed me to retrieve search results based on the user's search query.
</ul>
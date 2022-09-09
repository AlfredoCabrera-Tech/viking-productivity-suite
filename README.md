# Viking Productivity Suite

This is an app designed for productivity. An excellent tool for students, teachers, and anyone interested in staying focused on the task at hand whilst keeping track of the work of the day.

**Live site URL:** https://viking-productivity-suite.netlify.app/

![App Screenshot](/src/App%20Screenshot.png)

## Why Was This App Made

Some of the biggest challenges for any productive person are:

1. To get and stay focused on the task at hand.
2. To keep track of both the current and future tasks.
3. To remember mental notes made throughout the day.
4. Once in the "flow" zone, to take regular breaks to rest and stay healthy.
5. To avoid overall "burnout".

Being tiredness, burnout, anxiety, and information overload so prevalent in the quest for productivity; this app aims at attacking the challenges mentioned above offering the user some simple, yet effective, tools that can increase their productivity without sacrificing their health. 

These tools are listed below:

**Pomodoro Timer**

The 'Pomodoro Technique' is a time management strategy built around the idea of scheduling rest into your workflow as a way to keep your mind focused and consequently optimizing the productivity cycle. 

Its benefits are well-known and well-documented and has gained popularity all-around the globe on recent years.

[Here](https://www.forbes.com/sites/bryancollinseurope/2020/03/03/the-pomodoro-technique/?sh=29b6778c3985) is an article by Forbes Magazine talking a little bit about this wonderful method.

**Task Tracker**

One of the main systems put in place by every major organization in the world to increase their prodicivity is some sort of task management. This is true for organizations of any type and it is encouraged to be used at every level.

Currently, given the remote nature of many jobs around the world, the amount of employees recurring to freelancing, and a somewhat new trend of people looking into personal development and increasing their productivity; these techniques have been getting a deeper reach into the individual marketplace.

This is a simple, yet effective way of visualizing and tracking the different tasks at hand, establishing a clear priority-based paradigm and accounting for the progress made in each work session.

[Here](https://web.engr.uky.edu/~rsouley/CE%20120/12/Measuring%20Productivity%20An%20Industry%20Challenge.pdf) is an example of one of many academic articles focused on measuring productivity in different fields, henceforth considering some type of task managment paradigm and studying its correlation with a project's success. This one is an article cited multiple times by Harvey M. Bernstein, the "president and chief executive officer of the Civil Engineering Research Foundation."

**Note keeping**

Retaining information is a main concern when it refers to productivity and success in any project. Though this is not a long-form note-taking app, note-taking can be both concise and effective. There's no shortage of possible studies and articles eligible to cite and serve as evidence for a system as simple as impactful as is taking notes.

[Here](https://learningcenter.unc.edu/tips-and-tools/effective-note-taking-in-class/) is, for example, an article written by The Learning Center, University of North Carolina at Chapel Hill; consulting as well a numerous amount of studies, articles and, even thesis; to credit for the correlation between taking notes and being productive.

## How It Was Made

**Tech used:**  JavaScript, React JS, SASS, Browser's Local Storage.

This app is conceived to easily adapt to the user's existing workflow and seamlessly improve their overall productivity without sacrificing their health.

**JavaScript/React JS:**

This app was based on the create-react-app npm package's folder structure. Every component is a function-based component that can be broken up the following way:

- A Timer component based around the 'Pomodoro Technique' using hooks like useState, useContext, and useRef; and npm packages such as 'classnames' to keep a true dynamic rendering connected throughout the different working parts of the application.

- A Tasks and a Notes components that are very similar in their use of Hooks and the manipulation of data via the browser's Local Storage, which allows the app to create, read, and delete entries interpreted as tasks and notes respectively.

**SASS:** 

Making use of Sass's partials, only one simple scss file is used to improve speed and performance. Also utilizing modern methods such as @use and @forward to make sure the app stays up to date without deprecated dependencies like node-sass or @import.

## Optimizations

- Added a simple audio to indicate the end of each time-cycle.

- Items sorted from old to new in order to keep the current task on top of the list always.

## Future Updates

- The styling and aesthetic aspects of this app are currently under further development and will be improved in future revisions.

- The user will have the ability to "edit" existing tasks and/or notes in future revisions.

- The "High-Priority" items will be displayed on top of the "Low-Priority" ones in future revisions.

- The user will have theability to search and filter through the items on the tasks/notes list in future revisions.

## Lessons Learned

- As software engineers, we have to stay up to date on the different tools and methods we use to make our ideas a reality. Making sure to be using sustainable and durable systems to build the web should be a priority for us all.

- The browser's API's are deeply interesting and often overlooked. As a developer constantly working towards improving and making impactful products, it's worth it to learn more about them and incorporate them into regular use.

- Modern-day Software Engineers are standing on the shoulders of giants. We have multiple pre-built tools that are effective and allow us to make our work more precise and efficient. Rather than considering using pre-built tools 'cheating', not having to re-invent the wheel every time makes it possible for us to focus on really advancing the end-line on our current knowledge and possibilities. Being the user the ultimate benefactor of such advancements, it's worth it to check out how we can incorporate pre-built tools into our projects, making the tech space a more solid, collaborative community towards a common goal. 

- Tools that make the user's workflow easier/better can ultimately improve their lives. Apps such as this, as small as they may seem, can still be impactful and that's a responsibility we, as Software Engineers, cannot overlook.
## Table of contents

- [Back to the project setup](../README.md)
  
## First Step
### UI Design
  Aiming to code a user-friendly UI and as similar as possible to the Twitter interface, I built a UI project in the beginning, starting with a wireframe (pen and paper ideas) and then creating the template with adobe XD (a design and prototype tool). With the UI project done I had the base colors, resources, spacing, responsiveness, and the whole idea to move to the coding process. 

<div align="center">
  <figure>
    <img src="../src/assests/images/ui-twitter-like-app.png" alt="twitter like app ui design">
    <figcaption>Fig. 1 - Screenshot of UI Design process in Adobe XD.</figcaption>
  </figure>
</div>


  ### Logo rebranding
   To have some fun and be a bit creative, I decided to rebrand the Twitter logo to connect with the ReactiveX logo but kept the Twitter minimalist style. In the picture below, you can understand the concept behind the new logo.

  <div align="center">
    <figure>
      <img width="400px" src="../src/assests/images/rebranding.jpg" alt="Rebranding Twitter logo"/>
      <br />
      <figcaption>Fig. 2 - The process of rebranding the twitter logo.</figcaption>
    </figure>
  </div>

  ## Second step

  ### Project definition
  Using the [challenge pdf](../src/assests/pdf/Twitter-like_application.pdf) description as a base and testing the actual Twitter application, I made some decisions about the application's behavior and flow.
  - I decided that I would treat the "All Tweets List" and "Liked Tweets List" separately to keep the "Liked Tweets List" as a history (similar to actual Twitter). That means they would be available even after 30 seconds, but that won't happen for the "All Tweets List", since they are updated with frequency and removed after 30 seconds.

  - This decision also reflects on the liked tweets counter. The counter of "Liked Tweets List" would update if you like or dislike a post. But for, the "All Tweets List" the counter would also update after the old post is removed from the list if you previously liked it. Since it's not there anymore, I understand that can't be counted as liked. 
  
  - Thinking about the delete all function, since it is such a typical flow for the actions that the user can't undo and good practice, I decided it should have a confirmation modal, asking if the user wants to proceed with the deletion. 
  ### Project setup
  A shell is a collection of components shared by all products within a platform. It provides a common set of interaction patterns that persist between and across products.
  The UIShell component is the foundation for navigating and orienting the user to the UI.
  ### Coding
  lorem ipsum

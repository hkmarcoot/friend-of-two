## Inspiration

Have you ever tried to get to know a new person but need more confirming information? Those who say they have known that person for a long time may not even have a deep knowledge of him/her! With the power of AI, we can now create an AI-powered mutual friend to help solve this problem and make making a new friend easier. The AI is tailor-made by you so that what you like / dislike can be understood by anyone who wants to get close to you.

## What it does

Users will create a chatroom with their tailor-made AI mutual friends by filling in their hobbies, interests, hates, and anything they want others to know. Other app users can enter the chatroom and ask questions about the AI owner. The AI mutual friend will reply to any question with the information given by the owner.

## How we built it

The project began with the tutorial from Simon Grimm [Link Here](https://galaxies.dev/react-native-chat-convex), it built the backbone of our AI Mutual Friend application. Then, we implemented the Convex Auth by following this tutorial from Michal and Wayne from Convex [Link Here](https://www.youtube.com/watch?v=ScvEfNsJHgo). We used the latest ChatGPT model, gpt-4o-mini, for the AI features [Link Here](https://platform.openai.com/docs/api-reference/streaming).

## Challenges we ran into

It was our first time using Convex Auth and building an application on React Native. We completed the project locally with the Convex Auth, and it ran perfectly on the web simulator and iPhone and Android emulators. However, the Convex Auth became ticky with the redirect_uri when producing the Netlify web app and an apk.

## Accomplishments that we're proud of

In addition to the Convex Auth, we built a working application that runs on the web, iPhone, and Android, using Convex as its backend. We tested the application on emulators, browsers, and even an Android physical device.

## What we learned

We learned to build an application in React Native using Convex as the backend. Also, we found out openai can be used on React Native the same way in React.

## What's next for Friend Of Two - AI Powered Mutual Friend

We look forward to building more features on top of our application, such as adding private chat with the AI mutual friend, implementing real-time AI hints when typing to the AI owner privately, and setting up multiple layers for different layers of friendship. For example, the closer layer will be advised by AI to talk more in-depth about several topics and have more hints about topics that the owner is interested in.

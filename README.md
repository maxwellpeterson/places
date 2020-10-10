# Places

Appreciating the small features of the places we live that make them special to us.

Developed by Max Peterson, Belle Lim, and Jueun Kang, with support from Arun Jeevanantham and [Oasis](https://www.oasisneu.com/).

## Motivation

Platforms like Google Maps and Instagram boil down the perceived importance of locations around us to a few key metrics. But are places with thousands of reviews on Google or geotags on Instagram meaningful features of the city to the people that live there?

With a focus on flexible-form storytelling, the goal of Places is to recognize locations that have personal significance to the individuals that interact with them. These places probably don’t show up a Google Maps, and might otherwise be overlooked by the casual passer-by. But regardless of their physical presence, they influence the lives of the people in our communities, and derive their importance from this lived experience.

Places is a tool for understanding the human side of the built environment around us. For those close to home, it can give new meaning to places we may have passed by hundreds of times without ever thinking twice about. And to visitors in a foreign city, it can uncover the unique interactions that we may not be able to recognize as a cultural outsider. Both a geographical storytelling platform and an exploration of urban identity, Places encourages users to reflect on their own environment and appreciate the locations that impact others in their community.

## Functional Overview

The Places app is built around a map interface for exploring nearby locations with that have personal stories connected to them. Each of these locations has its own unique feed of written posts realted to the location that have been published by other people on the platform. Each user also has a profile page with their name, home location, and a personal map of places that they have written stories about.

Users can control which locations appear on the main map by switching between a few different data layers. By default, users will see places with stories from people they follow. A second layer will show places with stories from people who live in the local area. A third layer will show places with stories from people who have the same home location as the user. For example, a user from San Francisco looking at the map of Boston will see locations in Boston with stories from people from San Francisco. This way, users can approach the map from several distinct perspectives, and understand how people from different backgrounds may interact with different locations in different ways.

To contribute their own stories to the platform, users may post on an existing location feed, or create a new location on the map if they are the first person to write a story about that place. By adding new stories, users can build out their own personal map of the locations that are important to them, and expand the collective experiences captured by each place on the map.

## Getting Started

### Requirements

1. [Git](https://git-scm.com/)

2. [Node 12 LTS](https://nodejs.org/en/download/) or later

3. [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for macOS users

### Setup

1. Install the [Expo CLI](https://expo.io/) with `npm install -g expo-cli`

2. Download the Expo client app for iOS or Android on your mobile device

3. Clone the repository with `git clone https://github.com/maxwellpeterson/places.git`

4. Navigate to the project directory and install dependencies with `npm install`

### Development

1. Start the Expo server from the project directory with `expo start`

2. Connect to the Expo client app using your Expo account or the generated QR code

3. Start editing code, and changes should update in real-time on your mobile device
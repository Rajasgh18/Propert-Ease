# Criminal Recognition
Tracking Criminal faces using facial recognition and track their suspicious acitivity.

## Table of Contents
- [Project Overview](#project-overview)
- [WebApp] (#webApp)
- [Whatsapp-Bot] (#whatsapp-bot)
- [Sponsors] (#sponsors)


## Project Overview
It has been developed to track and maintain criminal database in which we will collect all media files and realtime feed in encrypted format afterwards this will use to compare and find about their existing criminal record.
<br>

## WebApp <a name="webapp"></a>
It is a web page where we can track, view and compare media files using our features-

### Video Face Tracking
We need to upload the video and image which contains the person whom we want to track in given video after processing it gives the timestamp in which the same person is detected

### Realtime Face Tracking
In this we need to provide an image of the person which compares every frame of the video which it gets in realtime from the different surveillance cameras and overlays a canvas whenever a person is detected in any of the cameras. We get alert messages in our device, with containing location and snapshot of the recognized person.

### Database Face Tracking
In this we detect or find the person using our database encryption method taken from realtime feed which continuosly encrypts all the camera feeds and stores it in the database.

## Installation
To install the project dependencies, run the following commands:
<br>

Install all the client dependencies
```bash
cd WebApp/Client
npm i
```

Install all the server dependencies 
```bash
cd WebApp/Server
pip install -r requirements.txt
```

## Usage
Start the Project by running the following command:
```bash
cd Whatsap-Bot/Client

npm start
```

## Whatsapp <a name="whatsapp-bot"></a>
It is developed to instantly get and manage criminal records via whatsapp. It requires a keyword to initiate the bot and login password are used for accessing the bot and then the image is send and the bot responds it by comparing it through existing criminal records(face_encodes, name, crime, station).

## Installation
To install the project dependencies, run the following commands:
<br>

Install all the nodejs dependencies
```bash
cd Whatsap-Bot/
npm i
```

Install all the python dependencies 
```bash
cd Whatsap-Bot/
pip install -r requirements.txt
```

## Usage
Start the Project by running the following command:
```bash
cd Whatsap-Bot/Client

npm start
```

## Sponsors 

### Auth0
It is used for creating login panels which also provides other platforms login authentication like Google, Github etc.

### Orkes
It helps in making of API requests more smooth and convenient using its workflows and tasks.
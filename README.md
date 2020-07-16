# Employee-Summary
This project allows companies to create a quick map on an html file of all of their employees with their own individualized description that is also catagorized by the employees position in the company.

## Installation
To run the application the first step is to clone the repository from github and then make sure that you have nodejs installed on your local device, the link to the documentation and download link of nodejs is [here](https://nodejs.org/en/download/). After having nodejs installed and this repository is downloaded down to your local device, then you will want to navigate towards the directory using the command line and run this line of code 
```bash
npm install 
```
This bash command will automatically install all of the node packages that are essential in this program and will then make the application runnable. Since this application strictly uses node and javascript (outside of the generated website) there is no website for the deployed application and to actually use the application, you will have to run the application through the command line and the way you do this is by running this command line in terminal/bash 
```bash
node app.js
```
## User Story 


```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## Review
When this application is ran in terminal one of the first prompts you see will be:

```bash
  Which type of employee do you want? 
  Manager 
  Intern 
❯ Engineer 

```
This is a select request which can be responded to by simply using the arrow keys to choose which type of employee you want and then hitting return to select the desired type. After that you will be asked to submit information about the employee then this data will be passed through the app.js file to create an object of the selected class of employee and store it in an array of all of the employees. Once all of the employees have been submitted then the array of employees will be passed through the htmlRenderer.js file which will generate an html page situated in the output directory. This html file contains cards for each of the submitted employees and the submitted information. To see a video demonstration of the application click [here](https://drive.google.com/file/d
1S76HV8LdBjP5mfFo-p2qEvFVBcU4Cmos/view?usp=sharing)

## Built with 
* [Node](https://nodejs.org/en/download/)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Fs](https://www.npmjs.com/package/fs)

## License
[MIT](https://choosealicense.com/licenses/mit/)
pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
         git 'https://github.com/Kakoo8/TingesoFront'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install --save moment moment/locale/es'
      }
    }

    stage('Build') {
        steps {
            sh 'npm run build'
        }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}
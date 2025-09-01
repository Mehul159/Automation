pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
    post {
        always {
            junit 'cypress/results/*.xml' // if you want to use jmeter
        }
    }
}

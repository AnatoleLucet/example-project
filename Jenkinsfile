pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'bazel build //...'
            }
        }
        stage('Test') { 
            steps {
                sh 'bazel run //src:test'
            }
        }
        stage('Push Image') { 
            steps {
                sh 'bazel run //src:push'
            }
        }
    }
}

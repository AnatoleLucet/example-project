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
	stage('Deploy') {
            steps {
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: 'root@193.70.43.121',
                            transfers: [
                                sshTransfer(
                                    cleanRemote: false,
				    excludes: '',
				    execCommand: '''
				        docker pull anatolelucet/example-project
					docker stop example-project || true
					docker rm example-project || true
					docker run -d --name example-project -p 2000:2000 anatolelucet/example-project
				    ''',
				    execTimeout: 120000,
				    flatten: false,
				    makeEmptyDirs: false,
				    noDefaultExcludes: false,
				    patternSeparator: '[, ]+',
				    remoteDirectory: '',
				    remoteDirectorySDF: false,
				    removePrefix: '',
				    sourceFiles: ''
				)
			    ],
			    usePromotionTimestamp: false,
			    useWorkspaceInPromotion: false,
			    verbose: false
			)
		    ]
		)
	    }
	}
    }
}

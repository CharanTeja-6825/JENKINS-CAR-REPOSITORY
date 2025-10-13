pipeline {
    agent any

    stages {
        // ===== FRONTEND BUILD =====
        stage('Build Frontend') {
            steps {
                dir('CAR-FRONTEND') {
                    sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"

                    nvm use 22.20.0
                    npm install
                    npm run build
                    '''
                }
            }
        }




        // ===== FRONTEND DEPLOY =====
        stage('Deploy Frontend to Tomcat') {
            steps {
                sh '''
                TOMCAT_DIR="/Users/rathikindicharanteja/Applications/apache-tomcat-11.0.11/webapps/carfrontend"

                if [ -d "$TOMCAT_DIR" ]; then
                    rm -rf "$TOMCAT_DIR"
                fi

                mkdir -p "$TOMCAT_DIR"
                cp -R CAR-FRONTEND/dist/* "$TOMCAT_DIR"
                '''
            }
        }

        // ===== BACKEND BUILD =====
        stage('Build Backend') {
            steps {
                dir('CAR-BACKEND') {
                    sh '''
                    export PATH="/opt/homebrew/bin:$PATH"
                    mvn clean package
                    '''
                }
            }
        }


        // ===== BACKEND DEPLOY =====
        stage('Deploy Backend to Tomcat') {
            steps {
                sh '''
                TOMCAT_WEBAPPS="/Users/rathikindicharanteja/Applications/apache-tomcat-11.0.11/webapps"
                WAR_FILE="$TOMCAT_WEBAPPS/springbootcarapi.war"
                WAR_DIR="$TOMCAT_WEBAPPS/springbootCARapi"

                if [ -f "$WAR_FILE" ]; then
                    rm -f "$WAR_FILE"
                fi

                if [ -d "$WAR_DIR" ]; then
                    rm -rf "$WAR_DIR"
                fi

                cp SpringBootCARDemo/target/*.war "$TOMCAT_WEBAPPS/"
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Pipeline Failed.'
        }
    }
}

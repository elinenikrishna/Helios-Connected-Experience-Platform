# Replace Existing GitHub Repo With This V2 Project

From your Mac:

```bash
cd /Users/krishnaelineni/GitHUB_Projects/Helios-Connected-Experience-Platform

# optional backup
git checkout -b backup-before-cgp3-v2
git push origin backup-before-cgp3-v2

git checkout main
rm -rf frontend backend docs k8s .github docker-compose.yml README.md

# copy the new V2 project files into this folder, then:
git add .
git commit -m "Upgrade CGP3 to premium connected experience platform V2"
git push origin main
```

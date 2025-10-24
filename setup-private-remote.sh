#!/bin/bash
# Setup dual remotes: public and private

# Rename current origin to 'public'
git remote rename origin public

# Add private remote (update URL after creating repo)
git remote add origin https://github.com/Mohannad1Emhemed/personal-site-private.git

# Verify remotes
echo "Current remotes:"
git remote -v

echo ""
echo "✅ Setup complete!"
echo ""
echo "Usage:"
echo "  Push to private (default): git push"
echo "  Push to public: git push public master"
echo "  Push to both: git push origin master && git push public master"

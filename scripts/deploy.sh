#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
GH_PAGES_DIR="$ROOT_DIR/.gh-pages"

echo "🔨 Generating static site..."
cd "$ROOT_DIR"
npx nuxt generate

echo ""
echo "📦 Preparing gh-pages branch..."
if [ -d "$GH_PAGES_DIR" ]; then
  echo "   → Oppdaterer eksisterende worktree"
  cd "$GH_PAGES_DIR"
  git fetch origin gh-pages
  git reset --hard origin/gh-pages
  git clean -fd
else
  echo "   → Oppretter nytt worktree"
  git worktree add "$GH_PAGES_DIR" gh-pages 2>/dev/null || {
    echo "   → gh-pages finnes ikke lokalt, oppretter orphan branch"
    git worktree add --orphan "$GH_PAGES_DIR" gh-pages 2>/dev/null || {
      # Hvis orphan ikke fungerer, lag en ny branch fra scratch
      rm -rf "$GH_PAGES_DIR"
      mkdir -p "$GH_PAGES_DIR"
      cd "$GH_PAGES_DIR"
      git init
      git remote add origin "$(cd "$ROOT_DIR" && git remote get-url origin)"
      git checkout --orphan gh-pages
    }
  }
fi

echo ""
echo "📋 Kopierer .output/public → gh-pages..."
cd "$ROOT_DIR"
rm -rf "$GH_PAGES_DIR"/*
cp -r .output/public/* "$GH_PAGES_DIR/"
cp -r .output/public/.[!.]* "$GH_PAGES_DIR/" 2>/dev/null || true

# Legg til .nojekyll for GitHub Pages (hindrer Jekyll-prosessering)
touch "$GH_PAGES_DIR/.nojekyll"

echo ""
echo "🚀 Committer og pusher gh-pages..."
cd "$GH_PAGES_DIR"
git add -A

if git diff --cached --quiet; then
  echo "   → Ingen endringer — hopper over commit"
else
  git commit -m "deploy: $(date '+%Y-%m-%d %H:%M')"
  git push origin gh-pages
  echo ""
  echo "✅ Deploy ferdig!"
fi

# Rydd opp worktree
cd "$ROOT_DIR"
git worktree remove "$GH_PAGES_DIR" 2>/dev/null || true

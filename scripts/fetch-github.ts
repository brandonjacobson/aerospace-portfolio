/**
 * GitHub Data Fetch Script (Data-Agent)
 * Pulls repos for GITHUB_USERNAME, extracts metadata, caches to data/github.json
 * No secrets exposed; uses GitHub public API
 */

const GITHUB_USERNAME = 'brandonjacobson';
const PRIMARY_REPOS = ['Project-Icarus']; // From CLAUDE.md
const OUTPUT_PATH = './data/github.json';

interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  pushed_at: string;
  languages_url?: string;
  featured?: boolean;
}

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Add token if available via env (not committed)
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          })
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const repos = await response.json();

    return repos
      .filter((repo: any) => !repo.fork && !repo.private)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        pushed_at: repo.pushed_at,
        languages_url: repo.languages_url,
        featured: PRIMARY_REPOS.includes(repo.name)
      }))
      .sort((a: GitHubRepo, b: GitHubRepo) => {
        // Featured repos first, then by last updated
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
      });
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return [];
  }
}

async function main() {
  console.log(`Fetching repositories for ${GITHUB_USERNAME}...`);
  const repos = await fetchGitHubRepos();

  console.log(`Found ${repos.length} public repositories`);
  console.log(`Featured repos: ${repos.filter(r => r.featured).length}`);

  // Write to data/github.json
  const fs = await import('fs/promises');
  await fs.mkdir('./data', { recursive: true });
  await fs.writeFile(OUTPUT_PATH, JSON.stringify(repos, null, 2));

  console.log(`✓ GitHub data cached to ${OUTPUT_PATH}`);
}

main().catch(console.error);

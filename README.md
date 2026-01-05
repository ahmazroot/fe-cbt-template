# FE-CBT - Frontend CBT Application

Next.js application dengan shadcn UI untuk kebutuhan CBT (Computer-Based Test).

## 🚀 Quick Start

### Prerequisites

- Node.js 20 atau lebih baru
- npm atau yarn
- Podman (untuk deployment)

### Local Development

1. **Clone repository dan install dependencies**

```bash
npm install
```

2. **Setup environment variables**

```bash
# Edit .env.development / .env.production dengan nilai yang sesuai
```

3. **Run development server**

```bash
npm run dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `npm run dev` - Run development server dengan environment validation
- `npm run build` - Build aplikasi untuk production
- `npm start` - Start production server
- `npm run lint` - Check code dengan ESLint
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code dengan Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - TypeScript type checking
- `npm run validate` - Run semua validasi (format, lint, type-check)

## 🔧 Development Workflow

### Code Quality

Project ini menggunakan beberapa tools untuk maintain code quality:

- **ESLint**: Linting untuk JavaScript/TypeScript
- **Prettier**: Code formatting
- **Husky**: Git hooks untuk pre-commit checks
- **lint-staged**: Run linters pada staged files
- **commitlint**: Conventional commit message enforcement

### Commit Message Format

Gunakan conventional commit format:

```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```bash
git commit -m "feat: add login page"
git commit -m "fix: resolve authentication bug"
git commit -m "docs: update README with deployment guide"
```

## 🐳 Podman Development

### Build Podman Image

```bash
podman build -t fe-cbt:latest .
# atau dengan Docker
docker build -t fe-cbt:latest .
```

### Run Container

```bash
podman run -d \
  --name fe-cbt-app \
  -p 3000:3000 \
  --env-file .env \
  fe-cbt:latest
```

### Using Podman Compose

```bash
podman-compose up -d
# atau dengan Docker
podman-compose up -d
```

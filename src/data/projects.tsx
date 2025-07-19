import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiMysql,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiDjango,

} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  cuda: {
    title: "CUDA",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-green-400">GPU</span>,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  scikit: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  onnx: {
    title: "ONNX",
    bg: "black",
    fg: "white",
    icon: <span><strong>ONNX</strong></span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "local-llm-kit",
    category: "AI/ML Tool",
    title: "Local-LLM Kit",
    src: "/assets/projects-screenshots/local-llm-kit/main.png",
    screenshots: ["main.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://pypi.org/project/local-llm-kit/",
    github: "https://github.com/1Utkarsh1/local-llm-kit",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            PyPI package for deploying local LLMs via OpenAI-compatible APIs
          </TypographyP>
          <TypographyP className="font-mono">
            Local-LLM Kit is a production-ready Python package that provides an OpenAI-compatible REST API for running Large Language Models locally. Perfect for on-premises deployment with full privacy control and enterprise integration.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>OpenAI-compatible REST API with streaming support</li>
            <li>Function calling and JSON mode capabilities</li>
            <li>Docker containerization for easy deployment</li>
            <li>CI/CD pipeline with automated testing</li>
            <li>Support for multiple LLM backends</li>
            <li>Log probabilities and detailed response metadata</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technical Implementation</TypographyH3>
          <p className="font-mono mb-2">
            Built with FastAPI for high-performance async handling, integrated with popular LLM libraries for seamless model loading and inference. Fully dockerized with production-ready logging and monitoring.
          </p>

          <TypographyH3 className="my-4 mt-8">Use Cases</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Enterprise AI deployments with data privacy requirements</li>
            <li>Development environments for LLM integration testing</li>
            <li>Edge computing scenarios with local inference needs</li>
            <li>Research environments requiring custom model configurations</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "model-compression",
    category: "AI/ML Research",
    title: "Model Compression Pipeline",
    src: "/assets/projects-screenshots/model-compression/pipeline.png",
    screenshots: ["pipeline.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.onnx,
      ],
    },
    live: "https://github.com/1Utkarsh1/model-compression-pipeline",
    github: "https://github.com/1Utkarsh1/model-compression-pipeline",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            End-to-end framework for neural network optimization
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive pipeline implementing state-of-the-art model compression techniques including pruning, quantization, and knowledge distillation. Achieved up to 75% size reduction while maintaining model performance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Compression Techniques</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li><strong>Structured & Unstructured Pruning:</strong> Remove redundant parameters while maintaining accuracy</li>
            <li><strong>Post-training Quantization:</strong> Reduce precision from FP32 to INT8/INT16</li>
            <li><strong>Knowledge Distillation:</strong> Transfer knowledge from large teacher to compact student models</li>
            <li><strong>Dynamic Quantization:</strong> Runtime optimization for inference acceleration</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Performance Results</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>≤ 75% model size reduction</li>
            <li>2× inference speed improvement on edge GPUs</li>
            <li>Minimal accuracy degradation (&lt;2% in most cases)</li>
            <li>ONNX export compatibility for cross-platform deployment</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built on PyTorch with custom compression modules, integrated ONNX runtime for optimized inference, and comprehensive benchmarking tools for performance validation across different hardware configurations.
          </p>
        </div>
      );
    },
  },
  {
    id: "dynamic-nerf",
    category: "Computer Vision",
    title: "Dynamic-NeRF",
    src: "/assets/projects-screenshots/dynamic-nerf/rendering.png",
    screenshots: ["rendering.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.cuda,
        PROJECT_SKILLS.opencv,
      ],
    },
    live: "https://github.com/1Utkarsh1/dynamic-nerf",
    github: "https://github.com/1Utkarsh1/dynamic-nerf",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Temporal NeRF with spatio-temporal attention for dynamic scenes
          </TypographyP>
          <TypographyP className="font-mono">
            An advanced implementation of Neural Radiance Fields (NeRF) extended to handle temporal dynamics in scenes. Features spatio-temporal attention mechanisms to render high-quality novel views of moving objects and changing environments.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Technical Innovation</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li><strong>Spatio-temporal Attention:</strong> Novel attention mechanism for temporal consistency</li>
            <li><strong>Dynamic Scene Modeling:</strong> Handles moving objects and deforming surfaces</li>
            <li><strong>GPU-Accelerated Training:</strong> CUDA optimizations for faster convergence</li>
            <li><strong>Temporal Interpolation:</strong> Smooth transitions between time steps</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Rendering Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            Complete training and rendering pipeline with support for various input formats, automatic camera pose estimation, and real-time visualization. Optimized for both research experimentation and practical applications.
          </p>

          <TypographyH3 className="my-4 mt-8">Applications</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Dynamic scene reconstruction from multi-view videos</li>
            <li>Temporal view synthesis for VR/AR applications</li>
            <li>3D content creation for entertainment industry</li>
            <li>Research tool for temporal neural representations</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "continual-learning",
    category: "AI/ML Research",
    title: "Continual Learning Platform",
    src: "/assets/projects-screenshots/continual-learning/dashboard.png",
    screenshots: ["dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.pandas,
      ],
    },
    live: "https://github.com/1Utkarsh1/continual-learning-platform",
    github: "https://github.com/1Utkarsh1/continual-learning-platform",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Research platform for lifelong learning algorithms
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive benchmarking suite for continual learning research, implementing state-of-the-art methods including Elastic Weight Consolidation (EWC), Experience Replay, and Learning without Forgetting (LwF). Features visual metrics and plug-and-play architecture.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Implemented Methods</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li><strong>Elastic Weight Consolidation (EWC):</strong> Prevents catastrophic forgetting through regularization</li>
            <li><strong>Experience Replay:</strong> Maintains memory buffer of past experiences</li>
            <li><strong>Learning without Forgetting (LwF):</strong> Knowledge distillation for continual learning</li>
            <li><strong>Progressive Neural Networks:</strong> Architecture-based approach to continual learning</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Visual Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive visualization suite including forgetting metrics, accuracy trends across tasks, memory usage analysis, and comparative performance charts. Real-time monitoring of learning progress and model behavior.
          </p>

          <TypographyH3 className="my-4 mt-8">Research Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Standardized benchmarking protocols</li>
            <li>Modular architecture for easy method integration</li>
            <li>Automated hyperparameter optimization</li>
            <li>Reproducible experiment configurations</li>
            <li>Statistical significance testing</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "istockz-trading",
    category: "FinTech Platform",
    title: "iStockz Paper Trading Portal",
    src: "/assets/projects-screenshots/istockz/dashboard.png",
    screenshots: ["dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://istockz.demo.com",
    github: "https://github.com/1Utkarsh1/istockz-trading-platform",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Secure paper trading platform with live market data
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive paper trading platform built with Django and MySQL, featuring real-time market data integration via yfinance, advanced portfolio analytics, and robust user role-based access control. Powers student trading competitions and financial education.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Platform Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li><strong>Live Market Data:</strong> Real-time stock prices via yfinance integration</li>
            <li><strong>Portfolio Management:</strong> Complete tracking of positions, P&L, and performance</li>
            <li><strong>Trading Competitions:</strong> Support for student competitions and leaderboards</li>
            <li><strong>Risk Management:</strong> Built-in position limits and risk controls</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Security & Access Control</TypographyH3>
          <p className="font-mono mb-2">
            Implements role-based access control (RBAC) with separate permissions for students, instructors, and administrators. Secure authentication system with session management and data protection protocols.
          </p>

          <TypographyH3 className="my-4 mt-8">Analytics Dashboard</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Real-time portfolio performance metrics</li>
            <li>Historical trading analytics and trends</li>
            <li>Risk assessment and position monitoring</li>
            <li>Competition rankings and leaderboards</li>
            <li>Market data visualization and charting</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Educational Impact</TypographyH3>
          <p className="font-mono mb-2">
            Successfully deployed for educational institutions to teach financial markets and trading strategies. Provides safe environment for students to learn trading concepts without financial risk while experiencing real market conditions.
          </p>
        </div>
      );
    },
  },
];

export default projects;

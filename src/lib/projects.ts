export type Project = {
  slug: string;
  name: string;
  shortDesc: string;
  status: string;
  stack: string[];
  summary: string;
  motivation: string;
  highlights: { title: string; desc: string }[];
  impact: string;
};

export const projects: Project[] = [
  {
    slug: 'pose-estimation-framework',
    name: 'Internal pose estimation framework',
    shortDesc: 'Unified plugin-oriented framework for fair model comparison and retraining.',
    status: 'Closed-source · Industry collaboration',
    stack: ['Python', 'PyTorch', 'HDF5', 'YAML'],
    summary:
      'A unified, plugin-oriented framework for training and evaluating pose estimation models. I have built this to solve the reproducibility problem in the field and to perform testing for my publications during my PhD.',
    motivation:
      'Researchers in human pose estimation typically release their own codebases, each with different data formats, training loops, and evaluation protocols. Comparing models fairly — or retraining them on a new dataset — requires substantial engineering effort each time. This framework was built to eliminate that overhead.',
    highlights: [
      {
        title: 'Plugin architecture',
        desc: 'Models, datasets, and augmentation strategies are registered as plugins via YAML config. Swapping a model or dataset requires changing a single line. Every new addition (model, dataset, transform etc.) can be added in a separate folder and registered so no refactoring is needed.',
      },
      {
        title: 'Unified model zoo',
        desc: '2D: HRNet, OpenPose-Torch, SimpleBaseline2D. 3D: SimpleBaseline3D, VideoPose3D, MotionAGFormer, KTPFormer, Context-Aware Pose Former, GASTNet.',
      },
      {
        title: 'Automated evaluation pipeline',
        desc: 'All experiment outputs (metrics, 2d and 3D poses, checkpoints) are exported to HDF5. A report generator produces a self-contained HTML file with plots, tables, and per-sequence breakdowns.',
      },
      {
        title: 'Reproducibility-first',
        desc: 'Every run is fully described by its YAML config. Configs are versioned alongside checkpoints, making experiments reproducible.',
      },
    ],
    impact:
      'Used internally at the lab in multiple research projects and in an industry collaboration for clinical markerless motion analysis.',
  },
];
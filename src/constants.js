import onepaneaiAvatar from "./assets/img/onepaneai-avatar.png";
import onepaneaiCofounder from "./assets/img/onepane-cofounder.jpg";
import jayaKrishnanAvatar from "./assets/img/man-avatar.webp";
import aTimeAvatar from "./assets/img/a-time-avatar.jpg";
import githubLogo from "./assets/img/github-logo.png";
import kubernetesLogo from "./assets/img/kubernetes-logo.png";

export const users = [
  {
    name: "Jaya Krishnan",
    userAvatar: jayaKrishnanAvatar,
  },
];

export const incidents = [
  {
    id: 1,
    incidentType: "High Traffic Alert",
    incidentMessage: "Traffic Volume  Exceeded Threshold on",
    incidentPlatform: "nexust-frontend",
    incidentTime: "8:50 AM",
  },
  {
    id: 2,
    incidentType: "Error Rate Alert",
    incidentMessage: "Error Frequency Surpassed Threshold on",
    incidentPlatform: "nexust-frontend",
    incidentTime: "8:50 AM",
  },
];

export const resourceChanges = [
  {
    id: 1,
    changePlatform: "nexus-frontend-deplyment",
    platformLogo: kubernetesLogo,
    changeType: "deployed by",
    changeBy: users[0].name,
    changeUserAvatar: users[0].userAvatar,
    changeTime: "7:58 AM",
    changeTimeAvatar: aTimeAvatar,
  },
  {
    id: 2,
    changePlatform: "vnet-nexussaas-prod-eastus-prod",
    platformLogo: kubernetesLogo,
    changeType: "configuration updated by",
    changeBy: users[0].name,
    changeUserAvatar: users[0].userAvatar,
    changeTime: "7:58 AM",
    changeTimeAvatar: githubLogo,
  },
];

export const messages = [
  {
    id: 1,
    text: "Show me the critical incident with open status for nexus Saas application",
    username: "You",
    timestamp: "Just Now",
    userAvatar: onepaneaiCofounder,
  },
  {
    id: 2,
    text: "Here are the currently open incidents from Nexus Saas:",
    username: "Copilot",
    timestamp: "Just Now",
    userAvatar: onepaneaiAvatar,
    incidents,
  },
  {
    id: 3,
    text: "What are the latest updates to associated resources?",
    username: "You",
    timestamp: "Just Now",
    userAvatar: onepaneaiCofounder,
  },
  {
    id: 4,
    text: "See the data below for recent changes to related resources",
    username: "Copilot",
    timestamp: "Just Now",
    userAvatar: onepaneaiAvatar,
    resourceChanges,
  },
];

export const suggestions = [
  "nexust-frontend",
  "Nexus Saas",
  "nexus-frontend-deplyment",
  "vnet-nexussaas-prod-eastus-prod",
  "Jaya Krishnan",
];

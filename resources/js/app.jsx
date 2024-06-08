import "./bootstrap";
import "../css/app.scss";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ThemeProvider } from "@material-tailwind/react";
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

import config from "@/config";
const chains = [polygonMumbai];
const projectId = config.projectId;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId, chains })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});



const ethereumClient = new EthereumClient(wagmiConfig, chains);
window.ethereumClient = ethereumClient;

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob("./Pages/**/*.jsx")),
  setup({ el, App, props }) {
    const root = createRoot(el);


    root.render(
      <>
        <ThemeProvider>
            <WagmiConfig config={wagmiConfig}>
              <App {...props} />
            </WagmiConfig>
            <Web3Modal defaultChain={polygonMumbai} projectId={projectId} ethereumClient={ethereumClient} />
        </ThemeProvider>
      </>
    );
  },
  progress: {
    color: "#4B5563",
  },
});

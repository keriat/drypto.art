import { Network } from "zksync/build/types";
import { version as zkSyncVersion } from "zksync/package.json";
import { version } from "../../package.json";
import { networkEthId } from "~/types/lib";

export const _ETHER_NETWORK_ID_DICTIONARY: networkEthId[] = [
  { name: "rinkeby", id: 4 },
  { name: "ropsten", id: 3 },
  { name: "mainnet", id: 1 },
];

export const GIT_REVISION: string = process.env.APP_GIT_REVISION ? process.env.APP_GIT_REVISION.toString() : "";
export const GIT_REVISION_SHORT: string = GIT_REVISION ? GIT_REVISION.slice(-7) : "";
export const VERSION: string = version;
export const MAGIC_KEY: string = process.env.MAGIC_KEY as string;
export const ETHER_NETWORK_NAME: Network = process.env.ETH_NETWORK as Network;
export const ETHER_PRODUCTION: boolean = ETHER_NETWORK_NAME === "mainnet";

export const ZK_LIB_VERSION: string = zkSyncVersion as string;
/**
 * Beta marker is applied in case of:
 *   1) Custom configuration “slug” imported from the ```.evn: ZK_NETWORK``` share the config w/t ```ZK_SPECIAL_API```.
 *      Together this params should be considered **CUSTOM** API-endpoint && same **CUSTOM** config-file.
 *      Obviously, the env is targeted testnets: (rinkeby | ropsten) *BUT...*
 *
 *   2) Simpler way to name beta-version is to search for the beta in .env-file, URL or API address.
 *
 * @type {boolean}
 */
export const ZK_IS_BETA = ZK_LIB_VERSION.search("beta") !== -1;

export const ETHER_NETWORK_CAPITALIZED = `${ETHER_NETWORK_NAME.charAt(0).toUpperCase()}${ETHER_NETWORK_NAME?.slice(1)}`;
export const CURRENT_APP_NAME = `Drypto Art Alpha version`;

export const ETHER_PREFIX: string = ETHER_PRODUCTION ? "" : ETHER_NETWORK_NAME;

export const ETHER_PREFIX_DOT: string = ETHER_PREFIX + (ETHER_PRODUCTION ? "" : ".");
export const ETHER_PREFIX_MINUS: string = ETHER_PREFIX + (ETHER_PRODUCTION ? "" : "-");

export const ETHER_NETWORK_ID: number | undefined = _ETHER_NETWORK_ID_DICTIONARY.find((value: networkEthId): boolean => value?.name === (ETHER_NETWORK_NAME as string))?.id;

/**
 * The right way of strict-typing for the web3provider
 *  — thanks to the [global.window] with type NodeJS.Global operation with the typed window is generally possible
 *  — provider [window.ethereum] should be declared separately using shims (index.d.ts)
 *    @see /src/types/index.d.ts
 * @author: Serge B. | Matter Labs
 */
export const ethWindow: Window = global.window;

export const ZK_API_BASE: string = process.env.ZK_SPECIAL_API ? process.env.ZK_SPECIAL_API : `${ETHER_PREFIX_MINUS}api.zksync.io`;
export const ZK_NETWORK: string = process.env.ZK_NETWORK ? process.env.ZK_NETWORK : ETHER_NETWORK_NAME;
export const APP_ZK_SCAN: string = process.env.ZK_SPECIAL_SCAN ? process.env.ZK_SPECIAL_SCAN : `https://${ETHER_PREFIX_DOT}zkscan.io`;
export const APP_ZKSYNC_BLOCK_EXPLORER = `${APP_ZK_SCAN}/explorer`;
export const APP_ETH_BLOCK_EXPLORER = `https://${ETHER_PREFIX_DOT}etherscan.io`;

/**
 * Onboard-only params
 */
export const ONBOARD_FORCED_EXIT_LINK: string | undefined = `https://withdraw${ETHER_PRODUCTION ? ".zksync.io" : "-" + ETHER_NETWORK_NAME + ".zksync.dev"}`;

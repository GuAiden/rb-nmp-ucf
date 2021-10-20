/**
 * Summary output JSON
 */
export interface FirmwareState {
  server: ServerInput;
  inputs: Input[];
  outputs: Output[];
}

export interface ServerInput {
  address: string;
  port: number;
  wsPort: number;
}

export interface Input {
  channelName: string;
  channelNumber: number;
  units: string;
  output: boolean;
  conversion: boolean;
  x?: number;
  y?: number;
}

export interface Output {
  channelName: string;
  channelNumber: number;
  units: string;
  output: boolean;
  conversion: boolean;
  x?: number;
  y?: number;
}

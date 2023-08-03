export interface IChromeSpeechRecognition {
    IsSpeechRecognitionSupported(): boolean;
    RecognizeCompleteUtterance(): Promise<string>;
  }
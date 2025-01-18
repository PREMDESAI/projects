export interface MemeFormProps {
    memeName: string;
    memeSymbol: string;
    memeIdea: string;
    isGeneratingMeme: boolean;
    onMemeNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMemeSymbolChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMemeIdeaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onGenerateMeme: () => void;
}

export interface MemeFactoryProps extends MemeFormProps { } 
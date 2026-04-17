import { useMemo } from "react";
import { useLang } from "../App";

const SplitText = (props: any) => {
    const layer = props.layer ? props.layer : 1;

    const { lang } = useLang() || { lang: 'eng' };
    const segmenter = useMemo(() => {
        // Map your app's lang codes to standard browser locales if needed
        const localeMap: Record<string, string> = { ben: 'bn', hi: 'hi', eng: 'en', ta: 'ta' };
        const activeLocale = localeMap[lang] || 'en';

        return new Intl.Segmenter(activeLocale, { granularity: 'grapheme' });
    }, [lang]);

    const safeChars = Array.from(segmenter.segment(props.children)).map(s => s.segment);
    if (layer == 1) {
        return (
            safeChars.map((letter: String, key: number) => {
                return (
                    <span key={key} className='letter'>
                        {letter}
                    </span>
                )
            })
        )
    } else {
        return (
            safeChars.map((letter: String, key: number) => {
                return (
                    <span key={key} className='letter'>
                        <span>
                            {letter}
                        </span>
                    </span>
                )
            })
        )
    }
}

export default SplitText
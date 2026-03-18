export const executeRecaptcha = (action: string): Promise<string | null> => {
    return new Promise((resolve) => {
        if (typeof window !== 'undefined' && (window as any).grecaptcha) {
            (window as any).grecaptcha.ready(() => {
                const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
                if (!siteKey) {
                    console.error('[reCAPTCHA] Site key is missing in environment variables');
                    resolve(null);
                    return;
                }

                console.log(`[reCAPTCHA] Executing for action: ${action}`);

                (window as any).grecaptcha
                    .execute(siteKey, { action })
                    .then((token: string) => {
                        console.log('[reCAPTCHA] Token generated successfully');
                        resolve(token);
                    })
                    .catch((err: any) => {
                        console.error('[reCAPTCHA] Execution failed:', err);
                        resolve(null);
                    });
            });
        } else {
            console.warn('reCAPTCHA script not loaded');
            resolve(null);
        }
    });
};

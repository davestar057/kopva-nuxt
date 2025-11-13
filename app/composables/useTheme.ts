import { useState } from '#imports';
import { onMounted, watch } from 'vue';

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'pulsepro-theme';

const resolveInitialTheme = (): ThemeMode => {
  if (process.client) {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }

  return 'light';
};

const applyThemeToDocument = (theme: ThemeMode) => {
  if (!process.client) {
    return;
  }

  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
};

export const useTheme = () => {
  const theme = useState<ThemeMode>('pulsepro-theme', resolveInitialTheme);

  const setTheme = (value: ThemeMode) => {
    theme.value = value;

    if (process.client) {
      window.localStorage.setItem(THEME_STORAGE_KEY, value);
    }
  };

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark');
  };

  if (process.client) {
    onMounted(() => {
      applyThemeToDocument(theme.value);
    });

    watch(
      theme,
      (value) => {
        applyThemeToDocument(value);
      },
      { immediate: true }
    );
  }

  return {
    theme,
    setTheme,
    toggleTheme,
  };
};

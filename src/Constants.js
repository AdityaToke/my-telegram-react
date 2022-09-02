/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const ALBUM_MESSAGES_LIMIT = 10;
export const ANIMATION_FRAME_DURATION_MS = 40;
export const ANIMATION_DURATION_100MS = 100;
export const ANIMATION_DURATION_200MS = 200;
export const ANIMATION_DURATION_300MS = 300;
export const ANIMATION_DURATION_500MS = 500;
export const ANIMATION_PREVIEW_DISPLAY_SIZE = 480;
export const AUDIO_MIN_BUFFERED_TIME_S = 30;
export const APP_NAME = 'Telegram Web 2';
export const CHAT_SLICE_LIMIT = 25;
export const DATABASE_NAME = 'tdlib';
export const DATABASE_TEST_NAME = 'tdlib_test';
export const EMOJI_PICKER_TIMEOUT_MS = 100;
export const FILE_PRIORITY = 1;
export const FILTER_COUNT_MAX = 10;
export const FILTER_TITLE_MAX_LENGTH = 12;
export const GROUP_CALL_AMPLITUDE_ANALYSE_COUNT_MAX = 50;
export const GROUP_CALL_AMPLITUDE_ANALYSE_INTERVAL_MS = 100;
export const GROUP_CALL_PARTICIPANTS_LOAD_LIMIT = 100;
export const IV_LOCATION_HEIGHT = 300;
export const IV_LOCATION_WIDTH = 600;
export const IV_PHOTO_SIZE = 800;
export const IV_PHOTO_DISPLAY_SIZE = 600;
export const KEY_SUGGESTED_LANGUAGE_PACK_ID = 'suggested_language_pack_id';
export const LOCATION_HEIGHT = 150;
export const LOCATION_SCALE = 2;
export const LOCATION_WIDTH = 300;
export const LOCATION_ZOOM = 16;
export const MAX_SNACK = 10;
export const MEDIA_SLICE_LIMIT = 20;
export const MEDIA_VIEWER_VIDEO_MAX_SIZE = 800;
export const MESSAGE_SLICE_LIMIT = 20;
export const MESSAGE_SPLIT_MAX_TIME_S = 600;
export const MUTED_VALUE_MAX = 2147483647; // int32.max = 2^32 - 1
export const MUTED_VALUE_MIN = 0;
export const NOTIFICATION_AUDIO_DELAY_MS = 5000;
export const NOTIFICATION_AUTO_HIDE_DURATION_MS = 5000;
export const NOTIFICATION_DEBOUNCE_DELAY_MS = 500;
export const OPTIMIZATIONS_FIRST_START = true;
export const PAGE_WIDTH_SMALL = 960;
export const PHOTO_BIG_SIZE = 1280;
export const PHOTO_DISPLAY_SIZE = 380;
export const PHOTO_DISPLAY_SMALL_SIZE = 90;
export const PHOTO_DISPLAY_EXTRA_SMALL_SIZE = 45;
export const PHOTO_SIZE = 320;
export const PHOTO_THUMBNAIL_SIZE = 90;
export const PIP_PLAYER_BORDER_PRECISION = 10;
export const PLAYER_AUDIO_2X_MIN_DURATION = 10 * 60;
export const PLAYER_LOOP_MAX_DURATION = 20;
export const PLAYER_VOLUME_NORMAL = 0.25;
export const PLAYER_VOLUME_MIN = 0.0;
export const PLAYER_VOLUME_MAX = 1.0;
export const PLAYER_VOLUME_STEP = 0.05;
export const PLAYER_PLAYBACKRATE_MIN = 0.25;
export const PLAYER_PLAYBACKRATE_MAX = 2.0;
export const PLAYER_PLAYBACKRATE_STEP = 0.25
export const PLAYER_PLAYBACKRATE_NORMAL = 1.0;
export const PLAYER_PLAYBACKRATE_FAST = 1.75;
export const PLAYER_PROGRESS_TIMEOUT_MS = 250;
export const PLAYER_SEEK_STEP_SMALL = 5.0;
export const PLAYER_SEEK_STEP_BIG = 10.0;
export const PLAYER_STREAMING_PRIORITY = 32;
export const PLAYER_PRELOAD_PRIORITY = 1;
export const PLAYER_PRELOAD_MAX_SIZE = 4 * 1024 * 1024;
export const POLL_QUESTION_LENGTH = 255;
export const POLL_QUESTION_HINT_LENGTH = POLL_QUESTION_LENGTH - 79;
export const POLL_QUESTION_MAX_LENGTH = POLL_QUESTION_LENGTH + 99;
export const POLL_OPTION_LENGTH = 100;
export const POLL_OPTION_HINT_LENGTH = POLL_OPTION_LENGTH - 29;
export const POLL_OPTION_MAX_LENGTH = POLL_OPTION_LENGTH + 99;
export const POLL_OPTIONS_MAX_COUNT = 10;
export const POLL_RESULTS_FIRST_SLICE_LENGTH = 15;
export const POLL_RESULTS_LEAVE_LENGTH = 5;
export const POLL_RESULTS_SLICE_LENGTH = 50;
export const PRELOAD_AUDIO_SIZE = 200 * 1024; //10 * 1024 * 1024;
export const PRELOAD_ANIMATION_SIZE = 200 * 1024; //10 * 1024 * 1024;
export const PRELOAD_DOCUMENT_SIZE = 200 * 1024;
export const PRELOAD_STICKER_SIZE = 10 * 200 * 1024;
export const PRELOAD_VOICENOTE_SIZE = 200 * 1024; //10 * 1024 * 1024;
export const PRELOAD_VIDEO_SIZE = 10 * 1024 * 1024;
export const PRELOAD_VIDEONOTE_SIZE = 200 * 1024; //10 * 1024 * 1024;
export const PROFILE_PHOTO_BIG_SIZE = 640;
export const PROFILE_PHOTO_PRELOAD_TIME_MS = 500;
export const PROFILE_PHOTO_SMALL_SIZE = 160;
export const SCROLL_PRECISION = 800;
export const SCROLL_CHATS_PRECISION = 400;
export const SEARCH_GLOBAL_TEXT_MIN = 4;
export const SEND_BY_CTRL_ENTER_KEY = 'x_send_by_ctrl_enter';
export const SERVICE_NOTIFICATIONS_USER_IDS = [42777, 333000, 777000];
export const SHARED_MESSAGE_SLICE_LIMIT = 42;
export const STICKER_DISPLAY_SIZE = 192;
export const STICKER_HINT_DISPLAY_SIZE = 76;
export const STICKER_PREVIEW_DISPLAY_SIZE = 192;
export const STICKER_SMALL_DISPLAY_SIZE = 64;
export const STORAGE_AUTH_KEY = 'auth';
export const STORAGE_AUTH_TEST_KEY = 'test_auth';
export const STORAGE_CACHE_KEY = 'cache';
export const STORAGE_CACHE_TEST_KEY = 'test_cache';
export const STORAGE_CONTACTS_KEY = 'contacts';
export const STORAGE_CONTACTS_TEST_KEY = 'test_contacts';
export const STORAGE_FILES_KEY = 'files';
export const STORAGE_FILES_TEST_KEY = 'test_files';
export const STORAGE_FILTERS_KEY = 'filters';
export const STORAGE_FILTERS_TEST_KEY = 'test_filters';
export const STORAGE_REGISTER_KEY = 'register';
export const STORAGE_REGISTER_TEST_KEY = 'test_register';
export const THUMBNAIL_BLURRED_SIZE_90 = 90;
export const THUMBNAIL_BLURRED_SIZE_40 = 40;
export const THUMBNAIL_PRIORITY = 32;
export const TYPING_INPUT_INTERVAL_S = 8;
export const TYPING_OUTPUT_INTERVAL_S = 8;
export const VERBOSITY_JS_MAX = 20;
export const VERBOSITY_JS_MIN = 0;
export const VERBOSITY_MAX = 20;
export const VERBOSITY_MIN = 0;
export const VOICENOTE_MIN_RECORD_DURATION = 1000;
export const USERNAME_LENGTH_MIN = 5;
export const REPLACE_PREFIX = '/telegram-react';
export const WASM_FILE_NAME = '2a79a539dfbe607fd685d6ccdd16b5df.wasm';
export const WASM_FILE_HASH = WASM_FILE_NAME.replace('.wasm', '');

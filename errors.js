const errorCodes = {
  // 4xx Errors
  400: {
    code: "BAD_REQUEST",
    description: "The request was malformed or contained invalid parameters",
    common_causes: [
      "Invalid parameter type",
      "Missing required field", 
      "Parameter value out of range",
      "Malformed JSON",
      "Wrong data format"
    ],
    examples: [
      "chat_id must be an integer",
      "text parameter is required",
      "Invalid JSON format"
    ],
    solution: "Check request parameters and format"
  },
  
  401: {
    code: "UNAUTHORIZED", 
    description: "Invalid bot token or bot was blocked by user",
    common_causes: [
      "Wrong bot token",
      "Bot token revoked",
      "User blocked the bot",
      "Bot kicked from chat"
    ],
    examples: [
      "Invalid token",
      "Forbidden: bot was blocked by the user"
    ],
    solution: "Verify bot token and check if user blocked the bot"
  },
  
  402: {
    code: "PAYMENT_REQUIRED",
    description: "Payment required for premium features",
    common_causes: [
      "Trying to use premium features without payment",
      "Insufficient bot funds",
      "Payment method required"
    ],
    examples: [
      "Payment required for this feature",
      "Premium subscription needed"
    ],
    solution: "Upgrade to premium or use alternative methods"
  },
  
  403: {
    code: "FORBIDDEN",
    description: "Bot doesn't have permission to perform the action",
    common_causes: [
      "Bot is not admin in group/channel",
      "Bot can't send messages in chat",
      "Bot can't delete messages",
      "Insufficient permissions",
      "Restricted by chat settings"
    ],
    examples: [
      "Forbidden: bot is not a member of the channel",
      "Forbidden: bot was kicked from the group",
      "Forbidden: can't send messages in this chat"
    ],
    solution: "Check bot permissions and chat role"
  },
  
  404: {
    code: "NOT_FOUND",
    description: "Requested resource was not found",
    common_causes: [
      "Invalid chat ID",
      "Message not found", 
      "User not found",
      "File not found",
      "Sticker set not found"
    ],
    examples: [
      "Chat not found",
      "Message to delete not found",
      "User not found"
    ],
    solution: "Verify resource IDs and existence"
  },
  
  405: {
    code: "METHOD_NOT_ALLOWED",
    description: "HTTP method not supported for this endpoint",
    common_causes: [
      "Using GET instead of POST",
      "Wrong HTTP method",
      "Endpoint doesn't support requested method"
    ],
    examples: [
      "Method not allowed",
      "This endpoint requires POST requests"
    ],
    solution: "Use correct HTTP method for the endpoint"
  },
  
  406: {
    code: "NOT_ACCEPTABLE",
    description: "Request format not acceptable",
    common_causes: [
      "Unsupported content type",
      "Invalid encoding",
      "Language/locale not supported"
    ],
    examples: [
      "Content type not supported",
      "Language not available"
    ],
    solution: "Check request headers and content type"
  },
  
  409: {
    code: "CONFLICT",
    description: "Conflict with existing resource or operation",
    common_causes: [
      "Terminating other polls",
      "Duplicate request",
      "Race condition",
      "Webhook already set"
    ],
    examples: [
      "Conflict: terminated by other poll",
      "Conflict: webhook was already set"
    ],
    solution: "Wait for operation to complete or check resource state"
  },
  
  413: {
    code: "REQUEST_ENTITY_TOO_LARGE",
    description: "Request payload too large",
    common_causes: [
      "File too big for upload",
      "Message text too long",
      "Too many entities in message",
      "Caption too long"
    ],
    examples: [
      "File too large: max 50MB",
      "Message text is too long",
      "Caption exceeds 1024 characters"
    ],
    solution: "Reduce file size or split content"
  },
  
  414: {
    code: "REQUEST_URI_TOO_LONG",
    description: "Request URI too long",
    common_causes: [
      "Too many query parameters",
      "URL length exceeded",
      "Deep linking parameters too long"
    ],
    examples: [
      "Request URI too long",
      "Too many parameters in deep link"
    ],
    solution: "Reduce parameters or use POST instead"
  },
  
  415: {
    code: "UNSUPPORTED_MEDIA_TYPE",
    description: "Unsupported media type",
    common_causes: [
      "Unsupported file format",
      "Invalid MIME type",
      "Media type not allowed for this method"
    ],
    examples: [
      "Unsupported media type",
      "File format not supported"
    ],
    solution: "Check supported formats and MIME types"
  },
  
  422: {
    code: "UNPROCESSABLE_ENTITY",
    description: "Request well-formed but semantically incorrect",
    common_causes: [
      "Invalid inline query data",
      "Malformed callback data",
      "Invalid webhook configuration",
      "Wrong parameter combination"
    ],
    examples: [
      "Invalid inline_query_id",
      "Callback data too long",
      "Webhook URL is invalid"
    ],
    solution: "Validate business logic and parameter combinations"
  },

  // 429 Rate Limiting
  429: {
    code: "FLOOD_WAIT",
    description: "Too many requests - rate limiting",
    common_causes: [
      "Sending messages too fast",
      "Too many API calls",
      "Spam protection triggered",
      "Too many inline queries"
    ],
    examples: [
      "Flood control: retry after 10 seconds",
      "Too many requests: retry later"
    ],
    solution: "Wait for the specified time before retrying, implement exponential backoff"
  },
  
  // 5xx Server Errors
  500: {
    code: "INTERNAL_SERVER_ERROR", 
    description: "Internal server error from Telegram",
    common_causes: [
      "Telegram server issues",
      "Temporary API problems",
      "Maintenance periods",
      "Backend service failures"
    ],
    examples: [
      "Internal server error",
      "Server unavailable"
    ],
    solution: "Retry after some time, check Telegram status"
  },
  
  502: {
    code: "BAD_GATEWAY",
    description: "Invalid response from upstream server",
    common_causes: [
      "Telegram API gateway issues",
      "Proxy server problems",
      "Network routing issues"
    ],
    examples: [
      "Bad Gateway",
      "Invalid response from upstream"
    ],
    solution: "Retry later, check network connectivity"
  },
  
  503: {
    code: "SERVICE_UNAVAILABLE",
    description: "Service temporarily unavailable",
    common_causes: [
      "Telegram API maintenance",
      "Server overload",
      "Temporary outage"
    ],
    examples: [
      "Service unavailable",
      "Server overloaded"
    ],
    solution: "Wait and retry, check Telegram status page"
  },
  
  504: {
    code: "GATEWAY_TIMEOUT",
    description: "Upstream server timeout",
    common_causes: [
      "Telegram API timeout",
      "Slow response from servers",
      "Network latency"
    ],
    examples: [
      "Gateway timeout",
      "Upstream server timed out"
    ],
    solution: "Retry with backoff, check network conditions"
  },

  // Telegram-specific Bot API Errors
  "BOT_BLOCKED": {
    code: "BOT_BLOCKED",
    description: "Bot was blocked by the user",
    common_causes: [
      "User manually blocked the bot",
      "Bot was removed from chat",
      "User deleted chat with bot"
    ],
    examples: [
      "Forbidden: bot was blocked by the user",
      "User is deactivated"
    ],
    solution: "Cannot send messages to blocked users"
  },

  "BOT_KICKED": {
    code: "BOT_KICKED",
    description: "Bot was kicked from group or channel",
    common_causes: [
      "Admin removed bot from group",
      "Bot lost admin privileges",
      "Channel owner removed bot"
    ],
    examples: [
      "Forbidden: bot was kicked from the group chat",
      "Forbidden: bot is not a member of the channel"
    ],
    solution: "Re-add bot to the chat or request admin permissions"
  },

  "CHAT_NOT_FOUND": {
    code: "CHAT_NOT_FOUND",
    description: "Chat does not exist or bot has no access",
    common_causes: [
      "Invalid chat ID",
      "Chat was deleted",
      "Bot never joined the chat",
      "Private chat not started"
    ],
    examples: [
      "Chat not found",
      "Invalid chat_id"
    ],
    solution: "Verify chat ID and ensure bot has access"
  },

  "MESSAGE_NOT_FOUND": {
    code: "MESSAGE_NOT_FOUND",
    description: "Message does not exist or not accessible",
    common_causes: [
      "Message was deleted",
      "Invalid message ID",
      "Bot can't access the message",
      "Message from another chat"
    ],
    examples: [
      "Message to delete not found",
      "Message to edit not found",
      "Message to pin not found"
    ],
    solution: "Check message ID and bot permissions"
  },

  "USER_NOT_FOUND": {
    code: "USER_NOT_FOUND",
    description: "User does not exist or not accessible",
    common_causes: [
      "Invalid user ID",
      "User deactivated account",
      "User never interacted with bot",
      "Privacy restrictions"
    ],
    examples: [
      "User not found",
      "User is deactivated"
    ],
    solution: "Verify user ID and ensure user exists"
  },

  "MESSAGE_TOO_LONG": {
    code: "MESSAGE_TOO_LONG",
    description: "Message text exceeds maximum length",
    common_causes: [
      "Text message over 4096 characters",
      "Caption over 1024 characters",
      "Too many formatting entities"
    ],
    examples: [
      "Message is too long",
      "Caption exceeds maximum length"
    ],
    solution: "Split message into multiple parts or shorten text"
  },

  "INVALID_FILE_ID": {
    code: "INVALID_FILE_ID",
    description: "Provided file ID is invalid or expired",
    common_causes: [
      "File ID expired",
      "Wrong file ID format",
      "File no longer available",
      "Using file ID from different bot"
    ],
    examples: [
      "Invalid file_id",
      "Wrong file identifier"
    ],
    solution: "Re-upload file or get fresh file ID"
  },

  "NETWORK_ERROR": {
    code: "NETWORK_ERROR",
    description: "Network connectivity issues",
    common_causes: [
      "Internet connection lost",
      "DNS resolution failed",
      "Proxy issues",
      "Telegram server unreachable"
    ],
    examples: [
      "Network error",
      "Connection timeout",
      "Failed to connect to Telegram API"
    ],
    solution: "Check internet connection and retry"
  },

  "FLOOD_CONTROL": {
    code: "FLOOD_CONTROL",
    description: "Too many requests to Telegram API",
    common_causes: [
      "Sending messages too frequently",
      "Exceeding API rate limits",
      "Spam-like behavior detected",
      "Too many inline queries"
    ],
    examples: [
      "Flood control: retry after 3600 seconds",
      "Too many requests: retry later"
    ],
    solution: "Implement exponential backoff and respect retry_after parameter"
  },

  "MIGRATE_TO_CHAT_ID": {
    code: "MIGRATE_TO_CHAT_ID",
    description: "Group migrated to supergroup",
    common_causes: [
      "Group upgraded to supergroup",
      "Chat ID changed after migration"
    ],
    examples: [
      "Migrate to chat id 123456789"
    ],
    solution: "Use the new chat ID provided in the error response"
  },

  "QUERY_TOO_OLD": {
    code: "QUERY_TOO_OLD",
    description: "Inline query is too old to answer",
    common_causes: [
      "User took too long to select result",
      "Inline query expired",
      "Server timeout for inline query"
    ],
    examples: [
      "Query is too old",
      "Inline query expired"
    ],
    solution: "Answer inline queries promptly within the time limit"
  },

  "CANNOT_PARSE_ENTITIES": {
    code: "CANNOT_PARSE_ENTITIES",
    description: "Failed to parse message entities",
    common_causes: [
      "Invalid Markdown formatting",
      "Malformed HTML tags",
      "Unclosed formatting tags",
      "Invalid entity offsets"
    ],
    examples: [
      "Can't parse entities",
      "Invalid entity format"
    ],
    solution: "Validate message formatting before sending"
  },

  "BUTTON_DATA_INVALID": {
    code: "BUTTON_DATA_INVALID",
    description: "Invalid inline keyboard button data",
    common_causes: [
      "Callback data too long (max 64 bytes)",
      "Invalid URL format",
      "Wrong button type",
      "Malformed switch inline query"
    ],
    examples: [
      "Button data invalid",
      "Callback data is too long"
    ],
    solution: "Check button data length and format"
  },

  "WEBHOOK_NOT_SET": {
    code: "WEBHOOK_NOT_SET",
    description: "Webhook is not set but required for this operation",
    common_causes: [
      "Trying to use webhook methods without setting webhook",
      "Webhook was removed",
      "getUpdates method being used instead of webhook"
    ],
    examples: [
      "Webhook is not set"
    ],
    solution: "Set webhook first or use getUpdates method"
  },

  "WEBHOOK_CONFLICT": {
    code: "WEBHOOK_CONFLICT",
    description: "Conflict between webhook and getUpdates method",
    common_causes: [
      "Using both webhook and getUpdates simultaneously",
      "Another instance using webhook",
      "getUpdates called while webhook is active"
    ],
    examples: [
      "Conflict: webhook and getUpdates cannot be used together"
    ],
    solution: "Use either webhook or getUpdates, not both"
  },

  // Additional Common Telegram Bot Errors
  "PEER_ID_INVALID": {
    code: "PEER_ID_INVALID",
    description: "Invalid peer/chat/user ID provided",
    common_causes: [
      "Wrong ID format",
      "Non-existent ID",
      "Using username instead of ID",
      "ID from different context"
    ],
    examples: [
      "Invalid peer id",
      "Chat id is invalid"
    ],
    solution: "Verify ID format and context"
  },

  "PHONE_NUMBER_INVALID": {
    code: "PHONE_NUMBER_INVALID",
    description: "Invalid phone number format",
    common_causes: [
      "Wrong number format",
      "Missing country code",
      "Non-existent number",
      "Number not on Telegram"
    ],
    examples: [
      "Phone number invalid",
      "Invalid phone number format"
    ],
    solution: "Check phone number format with country code"
  },

  "PHOTO_INVALID_DIMENSIONS": {
    code: "PHOTO_INVALID_DIMENSIONS",
    description: "Photo dimensions are invalid",
    common_causes: [
      "Photo too small",
      "Wrong aspect ratio",
      "Dimensions out of allowed range"
    ],
    examples: [
      "Photo dimensions invalid",
      "Photo too small for profile"
    ],
    solution: "Use photo with proper dimensions and aspect ratio"
  },

  "STICKER_SET_INVALID": {
    code: "STICKER_SET_INVALID",
    description: "Sticker set not found or invalid",
    common_causes: [
      "Wrong sticker set name",
      "Sticker set deleted",
      "Bot doesn't own the sticker set"
    ],
    examples: [
      "Sticker set not found",
      "Invalid sticker set name"
    ],
    solution: "Verify sticker set name and ownership"
  },

  "REPLY_MESSAGE_NOT_FOUND": {
    code: "REPLY_MESSAGE_NOT_FOUND",
    description: "Message to reply to not found",
    common_causes: [
      "Reply message deleted",
      "Invalid reply_to_message_id",
      "Reply message in different chat"
    ],
    examples: [
      "Reply message not found",
      "Invalid reply message id"
    ],
    solution: "Check reply message ID and chat context"
  },

  "MESSAGE_ID_INVALID": {
    code: "MESSAGE_ID_INVALID",
    description: "Invalid message identifier",
    common_causes: [
      "Wrong message ID format",
      "Message ID out of range",
      "Non-existent message ID"
    ],
    examples: [
      "Invalid message id",
      "Message identifier invalid"
    ],
    solution: "Verify message ID format and existence"
  },

  "CHAT_ADMIN_REQUIRED": {
    code: "CHAT_ADMIN_REQUIRED",
    description: "Bot requires admin privileges for this action",
    common_causes: [
      "Trying to ban users without admin rights",
      "Attempting to pin messages as non-admin",
      "Changing chat info without permissions"
    ],
    examples: [
      "Chat admin required",
      "Not enough rights to perform this action"
    ],
    solution: "Make bot admin in the chat or request permissions"
  },

  "INLINE_RESULT_EXPIRED": {
    code: "INLINE_RESULT_EXPIRED",
    description: "Inline result cache expired",
    common_causes: [
      "Inline result too old",
      "Cache timeout reached",
      "Server cleared inline cache"
    ],
    examples: [
      "Inline result expired",
      "Cached result no longer available"
    ],
    solution: "Regenerate inline query results"
  },

  "CANNOT_INITIATE_CONVERSATION": {
    code: "CANNOT_INITIATE_CONVERSATION",
    description: "Bot cannot start conversation with user first",
    common_causes: [
      "User never started chat with bot",
      "Privacy settings prevent bot from messaging first",
      "User blocked bot before conversation started"
    ],
    examples: [
      "Cannot initiate conversation with user",
      "Bot can't send first message to user"
    ],
    solution: "User must start conversation with /start command first"
  },

  "TOO_MANY_REQUESTS": {
    code: "TOO_MANY_REQUESTS",
    description: "Rate limit exceeded for specific method",
    common_causes: [
      "Sending messages too fast to same chat",
      "Too many API calls in short period",
      "Exceeding per-chat rate limits"
    ],
    examples: [
      "Too many requests",
      "Rate limit exceeded"
    ],
    solution: "Implement rate limiting and backoff in your bot"
  },

  "GROUP_CHAT_MIGRATED": {
    code: "GROUP_CHAT_MIGRATED",
    description: "Group chat was upgraded to supergroup",
    common_causes: [
      "Group reached member limit",
      "Admin enabled supergroup features",
      "Automatic migration"
    ],
    examples: [
      "Group chat migrated to supergroup"
    ],
    solution: "Use the new supergroup chat ID"
  },

  "BUTTON_URL_INVALID": {
    code: "BUTTON_URL_INVALID",
    description: "Invalid URL in inline keyboard button",
    common_causes: [
      "Malformed URL",
      "Unsupported URL scheme",
      "URL too long",
      "Invalid domain"
    ],
    examples: [
      "Button URL invalid",
      "Invalid URL format"
    ],
    solution: "Check URL format and validity"
  }
};

//Try to contribute 

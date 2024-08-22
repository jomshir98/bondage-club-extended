import { BrowserOptions } from "@sentry/browser";

/* eslint-disable quote-props */
export const VERSION = BCX_VERSION;

export const VERSION_CHECK_BOT: number = 37685;

// Server commit: b894fce7856593d16850721febc44b09c2ec94f7

// Game commit: dfdc7d183331ab593bc3ff59e4e1f847808e3fd8
export const SUPPORTED_BC_VERSIONS: readonly string[] = [
	"R101",
];

export const FUNCTION_HASHES: Record<string, string[]> = {
	"Player.CanChangeClothesOn": ["40EF5292"],
	"Player.GetBlindLevel": ["60D275E5"],
	"Player.GetBlurLevel": ["F6930456", "BFF08A45"],
	"Player.GetDeafLevel": ["42CB6D63"],
	"Player.HasTints": ["E09CA942", "F1F63BF9"],
	"Player.IsSlow": ["6E60F118"],
	ActivityCheckPrerequisite: ["AADA5EE5"],
	ActivityOrgasmPrepare: ["D49DAC9B"],
	ActivityOrgasmStart: ["0BD14BED"],
	AppearanceClick: ["723EA7F1"],
	AppearanceExit: ["AA300341"],
	AppearanceGetPreviewImageColor: ["4B9707B3"],
	AppearanceMenuBuild: ["94B77E20"],
	AppearanceMenuClick: ["DAD1BA25"],
	AppearanceMenuDraw: ["28FDF65B"],
	AppearanceRun: ["0BBDEE59"],
	AsylumEntranceCanWander: ["A85C35F3"],
	AsylumGGTSClick: ["E5660C8C"],
	AsylumGGTSLoad: ["DAB62F12"],
	BackgroundSelectionRun: ["F7AF6FF2"],
	CharacterAppearanceGenderAllowed: ["8A2D647F"],
	CharacterAppearanceLoadCharacter: ["EB80DBCE"],
	PoseCanChangeUnaided: ["F55FE4B0"],
	CharacterCanKneel: ["A5A325E3"],
	CharacterLoadCanvas: ["BA6AD4FF"],
	CharacterLoadEffect: ["BD6B6B4D"],
	CharacterNickname: ["A794EFF5"],
	ChatAdminClick: ["E0D55802"],
	ChatAdminExit: ["EC263A9C"],
	ChatAdminLoad: ["2633F8AF"],
	ChatAdminRun: ["E8038462"],
	ChatCreateClick: ["8794FE74"],
	ChatCreateExit: ["6FF19445"],
	ChatCreateLoad: ["5641D711"],
	ChatCreateRun: ["007553E0"],
	ChatRoomAddCharacterToChatRoom: ["FD2725F4"],
	ChatRoomAdminAction: ["86DE8F3C"],
	ChatRoomCanAttemptKneel: ["0AA710FA"],
	ChatRoomCanAttemptStand: ["026065D0"],
	ChatRoomCanBeLeashedBy: ["9EBEB784"],
	ChatRoomCanLeave: ["7065F82F"],
	ChatRoomClearAllElements: ["14DAAB05"],
	ChatRoomCharacterViewClickCharacter: ["715D92A0"],
	ChatRoomCreateElement: ["9A3FD548"],
	ChatRoomCharacterViewDrawBackground: ["AEE70C4E"],
	ChatRoomCharacterViewDraw: ["8ED3DF88"],
	ChatRoomCharacterViewDrawOverlay: ["06FB4CC3"],
	ChatRoomFirstTimeHelp: ["078BEEA9"],
	ChatRoomIsOwnedByPlayer: ["82640FF9"],
	ChatRoomKeyDown: ["B4BFDB0C"],
	ChatRoomListUpdate: ["D7FA0EC7"],
	ChatRoomLovershipOptionIs: ["6F5CE6A0"],
	ChatRoomMenuClick: ["F0E9ED82"],
	ChatRoomMenuDraw: ["0B8B0944"],
	ChatRoomMessage: ["BBD61334"],
	ChatRoomOwnershipOptionIs: ["FE060F0B"],
	ChatRoomRun: ["6F4C7B4D"],
	ChatRoomSendChat: ["7F540ED0"],
	ChatRoomSendEmote: ["6EF53CBA"],
	ChatRoomShouldBlockGaggedOOCMessage: ["16D6AED5"],
	ChatRoomStatusUpdate: ["35DA12E0"],
	ChatRoomSync: ["D59AF4C9"],
	ChatRoomSyncMemberLeave: ["A95EADE6"],
	ChatRoomTarget: ["C76C5E33"],
	ChatRoomUpdateDisplay: ["8DFC494A"],
	ChatSearchJoin: ["22514B80"],
	ChatSearchLoad: ["410EB5CB"],
	ChatSearchNormalDraw: ["66BF1158"],
	ChatSearchRun: ["64BCF8FB"],
	CheatFactor: ["594CFC45"],
	CheatImport: ["26C67608"],
	ColorPickerDraw: ["D1E82FB3"],
	CommandParse: ["C9061FE8"],
	CommonKeyDown: ["0F27218B"],
	CommonSetScreen: ["E2AC00F4"],
	DialogCanUnlock: ["0881FEFF"],
	DialogClickExpressionMenu: ["6497E698"],
	DialogDrawItemMenu: ["FCE556C2"],
	DialogFindPlayer: ["32851FF2"],
	DialogInventoryAdd: ["A0FD4697"],
	DialogInventoryBuild: ["A4A5BA06"],
	DialogItemClick: ["FAC6259A"],
	DialogChangeFocusToGroup: ["FBACE2DB"],
	DialogMenuButtonBuild: ["F0360ADB"],
	DialogMenuButtonClick: ["9D46EE8F"],
	DrawArousalMeter: ["DC0BB5B4"],
	DrawCharacter: ["35E09A1E"],
	DrawGetImage: ["EE0A921E"],
	DrawImageEx: ["3D3D74F5"],
	DrawProcess: ["4B2BE17E"],
	DrawStatus: ["FD747092"],
	FriendListBeepMenuSend: ["B81A695E"],
	FriendListClick: ["6B039C7C"],
	FriendListLoadFriendList: ["1F8A29E2"],
	FriendListRun: ["051E747B"],
	InfiltrationStealItems: ["1F601756"],
	InformationSheetClick: ["E535609B"],
	InformationSheetExit: ["29FF58C9"],
	InformationSheetRun: ["E248ADC7"],
	InventoryItemNeckAccessoriesCollarAutoShockUnitDetectSpeech: ["441EAEBF"],
	ItemColorReset: ["8FD17CAC"],
	ItemColorStateBuild: ["0CD125D8"],
	LoginMistressItems: ["B58EF410"],
	LoginResponse: ["410E1571"],
	LoginStableItems: ["EA93FBF7"],
	LogValue: ["6ED63114"],
	MainHallMaidsDisabledBegForMore: ["EA29F2B3"],
	MainHallWalk: ["E52553C4"],
	ManagementCanBeClubSlave: ["2A5CC4E5"],
	ManagementCanBeReleased: ["A2E2CA35"],
	ManagementCanBeReleasedOnline: ["3374263B"],
	ManagementCanBreakDatingLoverOnline: ["366AECAE"],
	ManagementCanBreakTrialOnline: ["51E9B7F4", "2CBA193D"],
	ManagementCanBreakUpLoverOnline: ["92E30200"],
	ManagementCannotBeReleased: ["755DB909"],
	ManagementCannotBeReleasedExtreme: ["2DA1650E"],
	ManagementCannotBeReleasedOnline: ["D1ACE212"],
	PreferenceIsPlayerInSensDep: ["1DB1238E"],
	PreferenceSubscreenDifficultyClick: ["3882E581"],
	PreferenceSubscreenDifficultyRun: ["65BF560F"],
	PrivateRansomStart: ["511E91C6"],
	PropertyAutoPunishParseMessage: ["B0B55044"],
	ServerAccountBeep: ["F16771D4"],
	ServerPlayerIsInChatRoom: ["E3771112"],
	ServerSend: ["779A1C78", "D356D537"],
	SpeechGarble: ["9D669F73"],
	SpeechGetTotalGagLevel: ["C55B705A"],
	StableGenericDrawProgress: ["6BACDAA2"],
	StruggleDrawStrengthProgress: ["4755C02D"],
	StruggleStrengthDraw: ["4406AD10"],
	TextGet: ["4DDE5794"],
	ValidationCanAddOrRemoveItem: ["80E3D94D"],
	ValidationResolveModifyDiff: ["5D9FA740"],
	WardrobeClick: ["E96F7F63"],
	WardrobeGroupAccessible: ["2D406A64"],
	WardrobeRun: ["9616EB3A"],
};

export const FORBIDDEN_BC_MODULES: string[] = [
	"ULTRAbc",
	"BCTweaks",
	"BC Tools",
];

export const FORBIDDEN_BC_COMMANDS: string[] = [
	"versions",
	"safeword",
	"unlock",
];

export const SENTRY_CONFIG: BrowserOptions = {
	dsn: "https://55ab768d8a3f2e0278b494ae6876f982@o4507753726214144.ingest.de.sentry.io/4507753729163344",
	maxBreadcrumbs: 50,
	debug: true,
	release: BCX_VERSION,
	environment: "devel",
};

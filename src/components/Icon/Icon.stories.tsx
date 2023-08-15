import React from 'react'

import { Icon } from './Icons'

type StorybookArgs = {
  size: 3 | 4 | 5 | 6 | 7 | 8 | 9
}

export default {
  title: 'Components/Icons/Individual',
  parameters: {
    happo: false, // Don't take screenshots of individual icon stories
    docs: {
      description: {
        component: `
###USWDS 3.0 Icon component

Source: https://designsystem.digital.gov/components/icon/
`,
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [3, 4, 5, 6, 7, 8, 9],
      },
      defaultValue: 4,
    },
  },
}

export const accessibilityNew = (args: StorybookArgs): JSX.Element => (
  <Icon.AccessibilityNew {...args} />
)

export const accessibleForward = (args: StorybookArgs): JSX.Element => (
  <Icon.AccessibleForward {...args} />
)

export const accountBalance = (args: StorybookArgs): JSX.Element => (
  <Icon.AccountBalance {...args} />
)

export const accountBox = (args: StorybookArgs): JSX.Element => (
  <Icon.AccountBox {...args} />
)

export const accountCircle = (args: StorybookArgs): JSX.Element => (
  <Icon.AccountCircle {...args} />
)

export const add = (args: StorybookArgs): JSX.Element => (
  <Icon.Add {...args} />
)

export const addCircle = (args: StorybookArgs): JSX.Element => (
  <Icon.AddCircle {...args} />
)

export const addCircleOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.AddCircleOutline {...args} />
)

export const alarm = (args: StorybookArgs): JSX.Element => (
  <Icon.Alarm {...args} />
)

export const alternateEmail = (args: StorybookArgs): JSX.Element => (
  <Icon.AlternateEmail {...args} />
)

export const announcement = (args: StorybookArgs): JSX.Element => (
  <Icon.Announcement {...args} />
)

export const arrowBack = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowBack {...args} />
)

export const arrowDownward = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowDownward {...args} />
)

export const arrowDropDown = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowDropDown {...args} />
)

export const arrowDropUp = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowDropUp {...args} />
)

export const arrowForward = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowForward {...args} />
)

export const arrowUpward = (args: StorybookArgs): JSX.Element => (
  <Icon.ArrowUpward {...args} />
)

export const api = (args: StorybookArgs): JSX.Element => (
  <Icon.Api {...args} />
)

export const assessment = (args: StorybookArgs): JSX.Element => (
  <Icon.Assessment {...args} />
)

export const attachFile = (args: StorybookArgs): JSX.Element => (
  <Icon.AttachFile {...args} />
)

export const attachMoney = (args: StorybookArgs): JSX.Element => (
  <Icon.AttachMoney {...args} />
)

export const autorenew = (args: StorybookArgs): JSX.Element => (
  <Icon.Autorenew {...args} />
)

export const backpack = (args: StorybookArgs): JSX.Element => (
  <Icon.Backpack {...args} />
)

export const bathtub = (args: StorybookArgs): JSX.Element => (
  <Icon.Bathtub {...args} />
)

export const bedding = (args: StorybookArgs): JSX.Element => (
  <Icon.Bedding {...args} />
)

export const bookmark = (args: StorybookArgs): JSX.Element => (
  <Icon.Bookmark {...args} />
)

export const bugReport = (args: StorybookArgs): JSX.Element => (
  <Icon.BugReport {...args} />
)

export const build = (args: StorybookArgs): JSX.Element => (
  <Icon.Build {...args} />
)

export const calendarToday = (args: StorybookArgs): JSX.Element => (
  <Icon.CalendarToday {...args} />
)

export const campaign = (args: StorybookArgs): JSX.Element => (
  <Icon.Campaign {...args} />
)

export const camping = (args: StorybookArgs): JSX.Element => (
  <Icon.Camping {...args} />
)

export const cancel = (args: StorybookArgs): JSX.Element => (
  <Icon.Cancel {...args} />
)

export const chat = (args: StorybookArgs): JSX.Element => (
  <Icon.Chat {...args} />
)

export const check = (args: StorybookArgs): JSX.Element => (
  <Icon.Check {...args} />
)

export const checkBoxOutlineBlank = (
  args: StorybookArgs
): JSX.Element => <Icon.CheckBoxOutlineBlank {...args} />
export const checkCircle = (args: StorybookArgs): JSX.Element => (
  <Icon.CheckCircle {...args} />
)

export const checkCircleOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.CheckCircleOutline {...args} />
)

export const checkroom = (args: StorybookArgs): JSX.Element => (
  <Icon.Checkroom {...args} />
)

export const cleanHands = (args: StorybookArgs): JSX.Element => (
  <Icon.CleanHands {...args} />
)

export const clothes = (args: StorybookArgs): JSX.Element => (
  <Icon.Clothes {...args} />
)

export const close = (args: StorybookArgs): JSX.Element => (
  <Icon.Close {...args} />
)

export const closedCaption = (args: StorybookArgs): JSX.Element => (
  <Icon.ClosedCaption {...args} />
)

export const cloud = (args: StorybookArgs): JSX.Element => (
  <Icon.Cloud {...args} />
)

export const code = (args: StorybookArgs): JSX.Element => (
  <Icon.Code {...args} />
)

export const comment = (args: StorybookArgs): JSX.Element => (
  <Icon.Comment {...args} />
)

export const connectWithoutContact = (
  args: StorybookArgs
): JSX.Element => <Icon.ConnectWithoutContact {...args} />
export const construction = (args: StorybookArgs): JSX.Element => (
  <Icon.Construction {...args} />
)

export const constructionWorker = (args: StorybookArgs): JSX.Element => (
  <Icon.ConstructionWorker {...args} />
)

export const contactPage = (args: StorybookArgs): JSX.Element => (
  <Icon.ContactPage {...args} />
)

export const contentCopy = (args: StorybookArgs): JSX.Element => (
  <Icon.ContentCopy {...args} />
)

export const coronavirus = (args: StorybookArgs): JSX.Element => (
  <Icon.Coronavirus {...args} />
)

export const creditCard = (args: StorybookArgs): JSX.Element => (
  <Icon.CreditCard {...args} />
)

export const deck = (args: StorybookArgs): JSX.Element => (
  <Icon.Deck {...args} />
)

export const deleteIcon = (args: StorybookArgs): JSX.Element => (
  <Icon.Delete {...args} />
)

export const deviceThermostat = (args: StorybookArgs): JSX.Element => (
  <Icon.DeviceThermostat {...args} />
)

export const directions = (args: StorybookArgs): JSX.Element => (
  <Icon.Directions {...args} />
)

export const directionsBike = (args: StorybookArgs): JSX.Element => (
  <Icon.DirectionsBike {...args} />
)

export const directionsBus = (args: StorybookArgs): JSX.Element => (
  <Icon.DirectionsBus {...args} />
)

export const directionsCar = (args: StorybookArgs): JSX.Element => (
  <Icon.DirectionsCar {...args} />
)

export const directionsWalk = (args: StorybookArgs): JSX.Element => (
  <Icon.DirectionsWalk {...args} />
)

export const doNotDisturb = (args: StorybookArgs): JSX.Element => (
  <Icon.DoNotDisturb {...args} />
)

export const doNotTouch = (args: StorybookArgs): JSX.Element => (
  <Icon.DoNotTouch {...args} />
)

export const dragHandle = (args: StorybookArgs): JSX.Element => (
  <Icon.DragHandle {...args} />
)

export const eco = (args: StorybookArgs): JSX.Element => (
  <Icon.Eco {...args} />
)

export const electricalServices = (args: StorybookArgs): JSX.Element => (
  <Icon.ElectricalServices {...args} />
)

export const emojiEvents = (args: StorybookArgs): JSX.Element => (
  <Icon.EmojiEvents {...args} />
)

export const error = (args: StorybookArgs): JSX.Element => (
  <Icon.Error {...args} />
)

export const errorOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.ErrorOutline {...args} />
)

export const event = (args: StorybookArgs): JSX.Element => (
  <Icon.Event {...args} />
)

export const expandLess = (args: StorybookArgs): JSX.Element => (
  <Icon.ExpandLess {...args} />
)

export const expandMore = (args: StorybookArgs): JSX.Element => (
  <Icon.ExpandMore {...args} />
)

export const facebook = (args: StorybookArgs): JSX.Element => (
  <Icon.Facebook {...args} />
)

export const fastForward = (args: StorybookArgs): JSX.Element => (
  <Icon.FastForward {...args} />
)

export const fastRewind = (args: StorybookArgs): JSX.Element => (
  <Icon.FastRewind {...args} />
)

export const favorite = (args: StorybookArgs): JSX.Element => (
  <Icon.Favorite {...args} />
)

export const favoriteBorder = (args: StorybookArgs): JSX.Element => (
  <Icon.FavoriteBorder {...args} />
)

export const fileDownload = (args: StorybookArgs): JSX.Element => (
  <Icon.FileDownload {...args} />
)

export const filePresent = (args: StorybookArgs): JSX.Element => (
  <Icon.FilePresent {...args} />
)

export const fileUpload = (args: StorybookArgs): JSX.Element => (
  <Icon.FileUpload {...args} />
)

export const filterAlt = (args: StorybookArgs): JSX.Element => (
  <Icon.FilterAlt {...args} />
)

export const filterList = (args: StorybookArgs): JSX.Element => (
  <Icon.FilterList {...args} />
)

export const fingerprint = (args: StorybookArgs): JSX.Element => (
  <Icon.Fingerprint {...args} />
)

export const firstPage = (args: StorybookArgs): JSX.Element => (
  <Icon.FirstPage {...args} />
)

export const flag = (args: StorybookArgs): JSX.Element => (
  <Icon.Flag {...args} />
)

export const flickr = (args: StorybookArgs): JSX.Element => (
  <Icon.Flickr {...args} />
)

export const flight = (args: StorybookArgs): JSX.Element => (
  <Icon.Flight {...args} />
)

export const flooding = (args: StorybookArgs): JSX.Element => (
  <Icon.Flooding {...args} />
)

export const folder = (args: StorybookArgs): JSX.Element => (
  <Icon.Folder {...args} />
)

export const folderOpen = (args: StorybookArgs): JSX.Element => (
  <Icon.FolderOpen {...args} />
)

export const formatQuote = (args: StorybookArgs): JSX.Element => (
  <Icon.FormatQuote {...args} />
)

export const formatSize = (args: StorybookArgs): JSX.Element => (
  <Icon.FormatSize {...args} />
)

export const forum = (args: StorybookArgs): JSX.Element => (
  <Icon.Forum {...args} />
)

export const github = (args: StorybookArgs): JSX.Element => (
  <Icon.Github {...args} />
)

export const gridView = (args: StorybookArgs): JSX.Element => (
  <Icon.GridView {...args} />
)

export const groupAdd = (args: StorybookArgs): JSX.Element => (
  <Icon.GroupAdd {...args} />
)

export const groups = (args: StorybookArgs): JSX.Element => (
  <Icon.Groups {...args} />
)

export const hearing = (args: StorybookArgs): JSX.Element => (
  <Icon.Hearing {...args} />
)

export const help = (args: StorybookArgs): JSX.Element => (
  <Icon.Help {...args} />
)

export const helpOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.HelpOutline {...args} />
)

export const highlightOff = (args: StorybookArgs): JSX.Element => (
  <Icon.HighlightOff {...args} />
)

export const history = (args: StorybookArgs): JSX.Element => (
  <Icon.History {...args} />
)

export const home = (args: StorybookArgs): JSX.Element => (
  <Icon.Home {...args} />
)

export const hospital = (args: StorybookArgs): JSX.Element => (
  <Icon.Hospital {...args} />
)

export const hotel = (args: StorybookArgs): JSX.Element => (
  <Icon.Hotel {...args} />
)

export const hourglassEmpty = (args: StorybookArgs): JSX.Element => (
  <Icon.HourglassEmpty {...args} />
)

export const hurricane = (args: StorybookArgs): JSX.Element => (
  <Icon.Hurricane {...args} />
)

export const identification = (args: StorybookArgs): JSX.Element => (
  <Icon.Identification {...args} />
)

export const image = (args: StorybookArgs): JSX.Element => (
  <Icon.Image {...args} />
)

export const info = (args: StorybookArgs): JSX.Element => (
  <Icon.Info {...args} />
)

export const infoOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.InfoOutline {...args} />
)

export const insights = (args: StorybookArgs): JSX.Element => (
  <Icon.Insights {...args} />
)

export const instagram = (args: StorybookArgs): JSX.Element => (
  <Icon.Instagram {...args} />
)

export const keyboard = (args: StorybookArgs): JSX.Element => (
  <Icon.Keyboard {...args} />
)

export const label = (args: StorybookArgs): JSX.Element => (
  <Icon.Label {...args} />
)

export const language = (args: StorybookArgs): JSX.Element => (
  <Icon.Language {...args} />
)

export const lastPage = (args: StorybookArgs): JSX.Element => (
  <Icon.LastPage {...args} />
)

export const launch = (args: StorybookArgs): JSX.Element => (
  <Icon.Launch {...args} />
)

export const lightbulb = (args: StorybookArgs): JSX.Element => (
  <Icon.Lightbulb {...args} />
)

export const lightbulbOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.LightbulbOutline {...args} />
)

export const link = (args: StorybookArgs): JSX.Element => (
  <Icon.Link {...args} />
)

export const linkOff = (args: StorybookArgs): JSX.Element => (
  <Icon.LinkOff {...args} />
)

export const list = (args: StorybookArgs): JSX.Element => (
  <Icon.List {...args} />
)

export const localCafe = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalCafe {...args} />
)

export const localFireDepartment = (
  args: StorybookArgs
): JSX.Element => <Icon.LocalFireDepartment {...args} />
export const localGasStation = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalGasStation {...args} />
)

export const localGroceryStore = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalGroceryStore {...args} />
)

export const localHospital = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalHospital {...args} />
)

export const localLaundryService = (
  args: StorybookArgs
): JSX.Element => <Icon.LocalLaundryService {...args} />
export const localLibrary = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalLibrary {...args} />
)

export const localOffer = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalOffer {...args} />
)

export const localParking = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalParking {...args} />
)

export const localPharmacy = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalPharmacy {...args} />
)

export const localPolice = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalPolice {...args} />
)

export const localTaxi = (args: StorybookArgs): JSX.Element => (
  <Icon.LocalTaxi {...args} />
)

export const locationCity = (args: StorybookArgs): JSX.Element => (
  <Icon.LocationCity {...args} />
)

export const locationOn = (args: StorybookArgs): JSX.Element => (
  <Icon.LocationOn {...args} />
)

export const lock = (args: StorybookArgs): JSX.Element => (
  <Icon.Lock {...args} />
)

export const lockOpen = (args: StorybookArgs): JSX.Element => (
  <Icon.LockOpen {...args} />
)

export const lockOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.LockOutline {...args} />
)

export const login = (args: StorybookArgs): JSX.Element => (
  <Icon.Login {...args} />
)

export const logout = (args: StorybookArgs): JSX.Element => (
  <Icon.Logout {...args} />
)

export const loop = (args: StorybookArgs): JSX.Element => (
  <Icon.Loop {...args} />
)

export const mail = (args: StorybookArgs): JSX.Element => (
  <Icon.Mail {...args} />
)

export const mailOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.MailOutline {...args} />
)

export const map = (args: StorybookArgs): JSX.Element => (
  <Icon.Map {...args} />
)

export const masks = (args: StorybookArgs): JSX.Element => (
  <Icon.Masks {...args} />
)

export const medicalServices = (args: StorybookArgs): JSX.Element => (
  <Icon.MedicalServices {...args} />
)

export const menu = (args: StorybookArgs): JSX.Element => (
  <Icon.Menu {...args} />
)

export const militaryTech = (args: StorybookArgs): JSX.Element => (
  <Icon.MilitaryTech {...args} />
)

export const moreHoriz = (args: StorybookArgs): JSX.Element => (
  <Icon.MoreHoriz {...args} />
)

export const moreVert = (args: StorybookArgs): JSX.Element => (
  <Icon.MoreVert {...args} />
)

export const myLocation = (args: StorybookArgs): JSX.Element => (
  <Icon.MyLocation {...args} />
)

export const navigateBefore = (args: StorybookArgs): JSX.Element => (
  <Icon.NavigateBefore {...args} />
)

export const navigateNext = (args: StorybookArgs): JSX.Element => (
  <Icon.NavigateNext {...args} />
)

export const navigateFarBefore = (args: StorybookArgs): JSX.Element => (
  <Icon.NavigateFarBefore {...args} />
)

export const navigateFarNext = (args: StorybookArgs): JSX.Element => (
  <Icon.NavigateFarNext {...args} />
)

export const nearMe = (args: StorybookArgs): JSX.Element => (
  <Icon.NearMe {...args} />
)

export const notifications = (args: StorybookArgs): JSX.Element => (
  <Icon.Notifications {...args} />
)

export const notificationsActive = (
  args: StorybookArgs
): JSX.Element => <Icon.NotificationsActive {...args} />
export const notificationsNone = (args: StorybookArgs): JSX.Element => (
  <Icon.NotificationsNone {...args} />
)

export const notificationsOff = (args: StorybookArgs): JSX.Element => (
  <Icon.NotificationsOff {...args} />
)

export const park = (args: StorybookArgs): JSX.Element => (
  <Icon.Park {...args} />
)

export const people = (args: StorybookArgs): JSX.Element => (
  <Icon.People {...args} />
)

export const person = (args: StorybookArgs): JSX.Element => (
  <Icon.Person {...args} />
)

export const pets = (args: StorybookArgs): JSX.Element => (
  <Icon.Pets {...args} />
)

export const phone = (args: StorybookArgs): JSX.Element => (
  <Icon.Phone {...args} />
)

export const photoCamera = (args: StorybookArgs): JSX.Element => (
  <Icon.PhotoCamera {...args} />
)

export const print = (args: StorybookArgs): JSX.Element => (
  <Icon.Print {...args} />
)

export const priorityHigh = (args: StorybookArgs): JSX.Element => (
  <Icon.PriorityHigh {...args} />
)

export const publicIcon = (args: StorybookArgs): JSX.Element => (
  <Icon.Public {...args} />
)

export const pushPin = (args: StorybookArgs): JSX.Element => (
  <Icon.PushPin {...args} />
)

export const radioButtonUnchecked = (
  args: StorybookArgs
): JSX.Element => <Icon.RadioButtonUnchecked {...args} />
export const rain = (args: StorybookArgs): JSX.Element => (
  <Icon.Rain {...args} />
)

export const reduceCapacity = (args: StorybookArgs): JSX.Element => (
  <Icon.ReduceCapacity {...args} />
)

export const remove = (args: StorybookArgs): JSX.Element => (
  <Icon.Remove {...args} />
)

export const report = (args: StorybookArgs): JSX.Element => (
  <Icon.Report {...args} />
)

export const restaurant = (args: StorybookArgs): JSX.Element => (
  <Icon.Restaurant {...args} />
)

export const rssFeed = (args: StorybookArgs): JSX.Element => (
  <Icon.RssFeed {...args} />
)

export const safetyDivider = (args: StorybookArgs): JSX.Element => (
  <Icon.SafetyDivider {...args} />
)

export const sanitizer = (args: StorybookArgs): JSX.Element => (
  <Icon.Sanitizer {...args} />
)

export const saveAlt = (args: StorybookArgs): JSX.Element => (
  <Icon.SaveAlt {...args} />
)

export const severeWeather = (args: StorybookArgs): JSX.Element => (
  <Icon.SevereWeather {...args} />
)

export const schedule = (args: StorybookArgs): JSX.Element => (
  <Icon.Schedule {...args} />
)

export const school = (args: StorybookArgs): JSX.Element => (
  <Icon.School {...args} />
)

export const science = (args: StorybookArgs): JSX.Element => (
  <Icon.Science {...args} />
)

export const search = (args: StorybookArgs): JSX.Element => (
  <Icon.Search {...args} />
)

export const security = (args: StorybookArgs): JSX.Element => (
  <Icon.Security {...args} />
)

export const send = (args: StorybookArgs): JSX.Element => (
  <Icon.Send {...args} />
)

export const sentimentDissatisfied = (
  args: StorybookArgs
): JSX.Element => <Icon.SentimentDissatisfied {...args} />
export const sentimentNeutral = (args: StorybookArgs): JSX.Element => (
  <Icon.SentimentNeutral {...args} />
)

export const sentimentSatisfied = (args: StorybookArgs): JSX.Element => (
  <Icon.SentimentSatisfied {...args} />
)

export const sentimentSatisfiedAlt = (
  args: StorybookArgs
): JSX.Element => <Icon.SentimentSatisfiedAlt {...args} />
export const sentimentVeryDissatisfied = (
  args: StorybookArgs
): JSX.Element => <Icon.SentimentVeryDissatisfied {...args} />
export const settings = (args: StorybookArgs): JSX.Element => (
  <Icon.Settings {...args} />
)

export const share = (args: StorybookArgs): JSX.Element => (
  <Icon.Share {...args} />
)

export const shield = (args: StorybookArgs): JSX.Element => (
  <Icon.Shield {...args} />
)

export const shoppingBasket = (args: StorybookArgs): JSX.Element => (
  <Icon.ShoppingBasket {...args} />
)

export const snow = (args: StorybookArgs): JSX.Element => (
  <Icon.Snow {...args} />
)

export const soap = (args: StorybookArgs): JSX.Element => (
  <Icon.Soap {...args} />
)

export const socialDistance = (args: StorybookArgs): JSX.Element => (
  <Icon.SocialDistance {...args} />
)

export const sortArrow = (args: StorybookArgs): JSX.Element => (
  <Icon.SortArrow {...args} />
)

export const spellcheck = (args: StorybookArgs): JSX.Element => (
  <Icon.Spellcheck {...args} />
)

export const star = (args: StorybookArgs): JSX.Element => (
  <Icon.Star {...args} />
)

export const starHalf = (args: StorybookArgs): JSX.Element => (
  <Icon.StarHalf {...args} />
)

export const starOutline = (args: StorybookArgs): JSX.Element => (
  <Icon.StarOutline {...args} />
)

export const store = (args: StorybookArgs): JSX.Element => (
  <Icon.Store {...args} />
)

export const support = (args: StorybookArgs): JSX.Element => (
  <Icon.Support {...args} />
)

export const supportAgent = (args: StorybookArgs): JSX.Element => (
  <Icon.SupportAgent {...args} />
)

export const textFields = (args: StorybookArgs): JSX.Element => (
  <Icon.TextFields {...args} />
)

export const thumbDownAlt = (args: StorybookArgs): JSX.Element => (
  <Icon.ThumbDownAlt {...args} />
)

export const thumbUpAlt = (args: StorybookArgs): JSX.Element => (
  <Icon.ThumbUpAlt {...args} />
)

export const timer = (args: StorybookArgs): JSX.Element => (
  <Icon.Timer {...args} />
)

export const toggleOff = (args: StorybookArgs): JSX.Element => (
  <Icon.ToggleOff {...args} />
)

export const toggleOn = (args: StorybookArgs): JSX.Element => (
  <Icon.ToggleOn {...args} />
)

export const topic = (args: StorybookArgs): JSX.Element => (
  <Icon.Topic {...args} />
)

export const tornado = (args: StorybookArgs): JSX.Element => (
  <Icon.Tornado {...args} />
)

export const translate = (args: StorybookArgs): JSX.Element => (
  <Icon.Translate {...args} />
)

export const trendingDown = (args: StorybookArgs): JSX.Element => (
  <Icon.TrendingDown {...args} />
)

export const trendingUp = (args: StorybookArgs): JSX.Element => (
  <Icon.TrendingUp {...args} />
)

export const twitter = (args: StorybookArgs): JSX.Element => (
  <Icon.Twitter {...args} />
)

export const undo = (args: StorybookArgs): JSX.Element => (
  <Icon.Undo {...args} />
)

export const unfoldLess = (args: StorybookArgs): JSX.Element => (
  <Icon.UnfoldLess {...args} />
)

export const unfoldMore = (args: StorybookArgs): JSX.Element => (
  <Icon.UnfoldMore {...args} />
)

export const update = (args: StorybookArgs): JSX.Element => (
  <Icon.Update {...args} />
)

export const uploadFile = (args: StorybookArgs): JSX.Element => (
  <Icon.UploadFile {...args} />
)

export const verified = (args: StorybookArgs): JSX.Element => (
  <Icon.Verified {...args} />
)

export const verifiedUser = (args: StorybookArgs): JSX.Element => (
  <Icon.VerifiedUser {...args} />
)

export const visibility = (args: StorybookArgs): JSX.Element => (
  <Icon.Visibility {...args} />
)

export const visibilityOff = (args: StorybookArgs): JSX.Element => (
  <Icon.VisibilityOff {...args} />
)

export const volumeOff = (args: StorybookArgs): JSX.Element => (
  <Icon.VolumeOff {...args} />
)

export const warning = (args: StorybookArgs): JSX.Element => (
  <Icon.Warning {...args} />
)

export const wash = (args: StorybookArgs): JSX.Element => (
  <Icon.Wash {...args} />
)

export const wifi = (args: StorybookArgs): JSX.Element => (
  <Icon.Wifi {...args} />
)

export const work = (args: StorybookArgs): JSX.Element => (
  <Icon.Work {...args} />
)

export const youtube = (args: StorybookArgs): JSX.Element => (
  <Icon.Youtube {...args} />
)

export const zoomIn = (args: StorybookArgs): JSX.Element => (
  <Icon.ZoomIn {...args} />
)

export const zoomOutMap = (args: StorybookArgs): JSX.Element => (
  <Icon.ZoomOutMap {...args} />
)

export const zoomOut = (args: StorybookArgs): JSX.Element => (
  <Icon.ZoomOut {...args} />
)

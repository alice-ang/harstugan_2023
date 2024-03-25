// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Footer → socials*
 */
export interface FooterDocumentDataSocialsItem {
  /**
   * url field in *Footer → socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;

  /**
   * label field in *Footer → socials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Footer → Opening Hours*
 */
export interface FooterDocumentDataOpeningHoursItem {
  /**
   * Days field in *Footer → Opening Hours*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.opening_hours[].days
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  days: prismic.KeyTextField;

  /**
   * hours field in *Footer → Opening Hours*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.opening_hours[].hours
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hours: prismic.KeyTextField;

  /**
   * Icons field in *Footer → Opening Hours*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.opening_hours[].icons
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icons: prismic.SelectField<"Instagram" | "Facebook">;
}

/**
 * Item in *Footer → logos*
 */
export interface FooterDocumentDataLogosItem {
  /**
   * logo field in *Footer → logos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logos[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * socials field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<FooterDocumentDataSocialsItem>>;

  /**
   * Copyright field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField;

  /**
   * Opening Hours field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.opening_hours[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  opening_hours: prismic.GroupField<
    Simplify<FooterDocumentDataOpeningHoursItem>
  >;

  /**
   * logos field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logos[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  logos: prismic.GroupField<Simplify<FooterDocumentDataLogosItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | LogosSlice
  | PricesSlice
  | OpeningSlice
  | AboutSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Price → price*
 */
export interface PriceDocumentDataPriceItem {
  /**
   * title field in *Price → price*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: price.price[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * cost field in *Price → price*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: price.price[].cost
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cost: prismic.KeyTextField;
}

/**
 * Content for Price documents
 */
interface PriceDocumentData {
  /**
   * price field in *Price*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: price.price[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  price: prismic.GroupField<Simplify<PriceDocumentDataPriceItem>>;
}

/**
 * Price document from Prismic
 *
 * - **API ID**: `price`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PriceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<PriceDocumentData>, "price", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Sections*
 */
export interface SettingsDocumentDataSectionsItem {
  /**
   * Section id field in *Settings → Sections*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.sections[].section_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_id: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Founded Date field in *Settings*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.founded_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  founded_date: prismic.NumberField;

  /**
   * Adress field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.adress
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  adress: prismic.KeyTextField;

  /**
   * Phone field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone: prismic.KeyTextField;

  /**
   * Sections field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.sections[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  sections: prismic.GroupField<Simplify<SettingsDocumentDataSectionsItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | FooterDocument
  | HomepageDocument
  | PriceDocument
  | SettingsDocument;

/**
 * Primary content in *About → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Heading field in *About → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Image field in *About → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Overline field in *About → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.overline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  overline: prismic.KeyTextField;

  /**
   * Text field in *About → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Section id field in *About → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.section_id
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  section_id: prismic.ContentRelationshipField<"section_id">;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *CustomerLogos → Primary*
 */
export interface CustomerLogosSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  eyebrowHeadline: prismic.RichTextField;

  /**
   * callToActionLabel field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Primary content in *CustomerLogos → Items*
 */
export interface CustomerLogosSliceDefaultItem {
  /**
   * image field in *CustomerLogos → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * link field in *CustomerLogos → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for CustomerLogos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CustomerLogosSliceDefaultPrimary>,
  Simplify<CustomerLogosSliceDefaultItem>
>;

/**
 * Slice variation for *CustomerLogos*
 */
type CustomerLogosSliceVariation = CustomerLogosSliceDefault;

/**
 * CustomerLogos Shared Slice
 *
 * - **API ID**: `customer_logos`
 * - **Description**: CustomerLogos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSlice = prismic.SharedSlice<
  "customer_logos",
  CustomerLogosSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * subtitle field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Image field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * text field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Logos → Primary*
 */
export interface LogosSliceDefaultPrimary {
  /**
   * title field in *Logos → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: logos.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Logos → Items*
 */
export interface LogosSliceDefaultItem {
  /**
   * logo field in *Logos → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: logos.items[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Default variation for Logos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LogosSliceDefaultPrimary>,
  Simplify<LogosSliceDefaultItem>
>;

/**
 * Slice variation for *Logos*
 */
type LogosSliceVariation = LogosSliceDefault;

/**
 * Logos Shared Slice
 *
 * - **API ID**: `logos`
 * - **Description**: Logos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogosSlice = prismic.SharedSlice<"logos", LogosSliceVariation>;

/**
 * Primary content in *Opening → Primary*
 */
export interface OpeningSliceDefaultPrimary {
  /**
   * Overline field in *Opening → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: opening.primary.overline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  overline: prismic.KeyTextField;

  /**
   * Heading field in *Opening → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: opening.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Section id field in *Opening → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: opening.primary.section_id
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  section_id: prismic.ContentRelationshipField<"section_id">;
}

/**
 * Primary content in *Opening → Items*
 */
export interface OpeningSliceDefaultItem {
  /**
   * Days field in *Opening → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: opening.items[].days
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  days: prismic.KeyTextField;

  /**
   * Hours field in *Opening → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: opening.items[].hours
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hours: prismic.KeyTextField;
}

/**
 * Default variation for Opening Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OpeningSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OpeningSliceDefaultPrimary>,
  Simplify<OpeningSliceDefaultItem>
>;

/**
 * Slice variation for *Opening*
 */
type OpeningSliceVariation = OpeningSliceDefault;

/**
 * Opening Shared Slice
 *
 * - **API ID**: `opening`
 * - **Description**: Opening
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OpeningSlice = prismic.SharedSlice<
  "opening",
  OpeningSliceVariation
>;

/**
 * Primary content in *Prices → Primary*
 */
export interface PricesSliceDefaultPrimary {
  /**
   * Heading field in *Prices → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: prices.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subtitle field in *Prices → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: prices.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Extra field in *Prices → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: prices.primary.extra
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  extra: prismic.KeyTextField;
}

/**
 * Primary content in *Prices → Items*
 */
export interface PricesSliceDefaultItem {
  /**
   * product field in *Prices → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: prices.items[].product
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product: prismic.KeyTextField;

  /**
   * cost field in *Prices → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: prices.items[].cost
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cost: prismic.KeyTextField;
}

/**
 * Default variation for Prices Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PricesSliceDefaultPrimary>,
  Simplify<PricesSliceDefaultItem>
>;

/**
 * Slice variation for *Prices*
 */
type PricesSliceVariation = PricesSliceDefault;

/**
 * Prices Shared Slice
 *
 * - **API ID**: `prices`
 * - **Description**: Prices
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricesSlice = prismic.SharedSlice<"prices", PricesSliceVariation>;

/**
 * Primary content in *Services → Items*
 */
export interface ServicesSliceDefaultItem {
  /**
   * Heading field in *Services → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Service name
   * - **API ID Path**: services.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Services → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum dolor sit amet
   * - **API ID Path**: services.items[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ServicesSliceDefaultItem>
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSocialsItem,
      FooterDocumentDataOpeningHoursItem,
      FooterDocumentDataLogosItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PriceDocument,
      PriceDocumentData,
      PriceDocumentDataPriceItem,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataSectionsItem,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      CustomerLogosSlice,
      CustomerLogosSliceDefaultPrimary,
      CustomerLogosSliceDefaultItem,
      CustomerLogosSliceVariation,
      CustomerLogosSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      LogosSlice,
      LogosSliceDefaultPrimary,
      LogosSliceDefaultItem,
      LogosSliceVariation,
      LogosSliceDefault,
      OpeningSlice,
      OpeningSliceDefaultPrimary,
      OpeningSliceDefaultItem,
      OpeningSliceVariation,
      OpeningSliceDefault,
      PricesSlice,
      PricesSliceDefaultPrimary,
      PricesSliceDefaultItem,
      PricesSliceVariation,
      PricesSliceDefault,
      ServicesSlice,
      ServicesSliceDefaultItem,
      ServicesSliceVariation,
      ServicesSliceDefault,
    };
  }
}

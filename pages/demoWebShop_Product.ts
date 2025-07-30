import { Page, Locator, expect } from "@playwright/test";

export class ProductPage {
  private page: Page;
  private menuItem: Locator;
  private categoryHeading: Locator;
  private sortByDropdown: Locator;

  constructor(page: Page, menuText: string, headingText: string) {
    this.page = page;
    this.menuItem = page.getByText(menuText).first();
    this.categoryHeading = page.getByRole('heading', { name: headingText }).first();
    this.sortByDropdown = page.locator('#products-orderby');
  }

  async openCategory() {
    await this.menuItem.click();
    await expect(this.categoryHeading).toBeVisible();
  }

  async setSortOption(sortValue: string) {
    await this.sortByDropdown.selectOption({ label: sortValue });
    await expect(this.sortByDropdown).toHaveValue(
      await this.sortByDropdown.inputValue()
    );
  }
}


/* import { Locator, Page, expect } from "@playwright/test";
import yaml from 'js-yaml';
import fs from 'fs';

// Load test data from YAML
const testData = yaml.load(
  fs.readFileSync('C:\\Users\\NeilDavison\\OneDrive - Elysium Digital\\Documents\\testData1.yaml', 'utf8')
) as any;

export class ProductPage {

    // Declarations.
    private page: Page;
    private productBooks: Locator;
    private booksCategoryTitle: Locator;
    private booksURL: string;
    private productComputers: Locator;
    private computersCategoryTitle: Locator;
    private computersURL: string;
    private productElectronics: Locator;
    private electronicsCategoryTitle: Locator;
    private electronicsURL: string;
    private productApparelAndShoes: Locator;
    private apparelAndShoesCategoryTitle: Locator;
    private apparelAndShoesURL: string;
    private productDigitalDownloads: Locator;
    private digitalDownloadsCategoryTitle: Locator;
    private digitalDownloadsURL: string;
    private productJewelry: Locator;
    private jewelryCategoryTitle: Locator;
    private jewelryURL: string;
    private productGiftCards: Locator;
    private giftCardsCategoryTitle: Locator;
    private giftCardsURL: string;
    private sortByDropdown: Locator;

    // Instantiations.
    constructor(page: Page, product: any) {
        this.page = page;
        this.booksURL = product.productBooks;
        this.productBooks = page.getByText(this.booksURL).nth(0);
        this.booksCategoryTitle = page.getByRole('heading', { name: this.booksURL }).nth(0);
        this.productComputers = page.getByText('Computers').nth(0);
        this.computersURL = 'Computers';
        this.computersCategoryTitle = page.getByRole('heading', { name: this.computersURL });
        this.productElectronics = page.getByText('Electronics').nth(0);
        this.electronicsURL = 'Electronics';
        this.electronicsCategoryTitle = page.getByRole('heading', { name: this.electronicsURL });
        this.productApparelAndShoes = page.getByText('Apparel & Shoes').nth(0);
        this.apparelAndShoesURL = 'Apparel & Shoes';
        this.apparelAndShoesCategoryTitle = page.getByRole('heading', { name: this.apparelAndShoesURL });
        this.productDigitalDownloads = page.getByText('Digital downloads').nth(0);
        this.digitalDownloadsURL = 'Digital downloads';
        this.digitalDownloadsCategoryTitle = page.getByRole('heading', { name: this.digitalDownloadsURL });
        this.productJewelry = page.getByText('Jewelry').nth(0);
        this.jewelryURL = 'Jewelry';
        this.jewelryCategoryTitle = page.getByRole('heading', { name: this.jewelryURL }).nth(0);
        this.productGiftCards = page.getByText('Gift Cards').nth(0);
        this.giftCardsURL = 'Gift Cards';
        this.giftCardsCategoryTitle = page.getByRole('heading', { name: this.giftCardsURL }).nth(0);
        this.sortByDropdown = page.locator('#products-orderby');

    }

    // Methods.
    async openBooksMenu() {
        await this.productBooks.click();
        await expect(this.booksCategoryTitle).toHaveText(this.booksURL);
    }

    async openComputersMenu() {
        await this.productComputers.click();
        await expect(this.computersCategoryTitle).toHaveText(this.computersURL);
    }

    async openElectronicsMenu() {
        await this.productElectronics.click();
        await expect(this.electronicsCategoryTitle).toHaveText(this.electronicsURL);
    }

    async openApparelAndShoesMenu() {
        await this.productApparelAndShoes.click();
        await expect(this.apparelAndShoesCategoryTitle).toHaveText(this.apparelAndShoesURL);
    }

    async openDigitalDownloadsMenu() {
        await this.productDigitalDownloads.click();
        await expect(this.digitalDownloadsCategoryTitle).toHaveText(this.digitalDownloadsURL);
    }

     async openJewelryMenu() {
        await this.productJewelry.click();
        await expect(this.jewelryCategoryTitle).toHaveText(this.jewelryURL);
    }

    async openGiftCardsMenu() {
        await this.productGiftCards.click();
        await expect(this.giftCardsCategoryTitle).toHaveText(this.giftCardsURL);
    }

    async setSortOption(sortValue: string) {
        await this.sortByDropdown.selectOption('Price: High to Low');
        await expect(this.sortByDropdown).toHaveValue(sortValue);
    }

    } */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dropdown } from './dropdown';
import { By } from '@angular/platform-browser';

describe('Dropdown', () => {
  let component: Dropdown;
  let fixture: ComponentFixture<Dropdown>;

  const DROPDOWN = '.dropdown';
  const DROPDOWN_SELECTOR = 'details.dropdown';
  const ITEM_SELECTOR = 'li';

  function setOptions(
    options = [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
    ]
  ) {
    component.options = options;
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(Dropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o botão de dropdown', () => {
    const button = fixture.debugElement.query(By.css(DROPDOWN));
    expect(button).toBeTruthy();
  });

  it('deve exibir os itens passados via input', () => {
    setOptions();
    const options = fixture.debugElement.queryAll(By.css(ITEM_SELECTOR));
    expect(options.length).toBe(2);
  });

  it('deve emitir evento ao selecionar um item', () => {
    setOptions();
    spyOn(component.selectedValueChange, 'emit');
    const links = fixture.debugElement.queryAll(By.css('li a'));
    links[0].nativeElement.click();

    expect(component.selectedValueChange.emit).toHaveBeenCalledWith(1);
  });

  it('deve alternar a visibilidade ao clicar no botão', () => {
    setOptions();
    const details = fixture.debugElement.query(By.css(DROPDOWN_SELECTOR));
    (details.nativeElement as HTMLDetailsElement).open = true;
    fixture.detectChanges();

    const listItem = details.nativeElement.querySelectorAll(ITEM_SELECTOR);
    expect(listItem.length).toBeGreaterThan(0);
  });
});

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { Push, PushOptions, PushObject } from '@ionic-native/push/ngx';

  constructor(
    private nativeStorage: NativeStorage,
    private push: Push
  ) {}
  
  private initializateFirebase() {
    const options: PushOptions = {
      android: {
        senderID: '248124962279',
        sound: 'true',
        forceShow: 'true'
      }
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('registration').subscribe(res => this.saveToken(res.registrationId));
  }


  private saveToken(response) {

    this.nativeStorage.setItem('phone',
    {
      token: response
    });

  }


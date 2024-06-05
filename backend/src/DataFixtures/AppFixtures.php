<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 1; $i <= 10; $i++) {
            $user= new User();
            $user->setEmail('user'.$i.'@gmail.com');
            $user->setFirstName('user');
            $user->setLastName('user');
            $user->setPassword('0000');
            $manager->persist($user);
        }

        $manager->flush();
    }
}
